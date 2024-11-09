import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../model/Client';
import { ClientService } from '../servico/client.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo Client:
  cliente: Client = new Client();

  // Variável para visibilidade dos botões
  btnCadastro: boolean = true;

  tabela: boolean = true;

  // Lista de clientes:
  clientes: Client[] = [];

  // Instanciando o serviço:
  constructor(private servico: ClientService) {}

  // Método para retornar clients
  selecionar(): void {
    this.servico.selecionar().subscribe((retorno: Client[]) => this.clientes = retorno);
  }

  // Método para cadastrar clients
  cadastrar(): void {
    this.servico.cadastrar(this.cliente).subscribe((retorno: Client) => {
      this.clientes.push(retorno);
      this.cliente = new Client(); // Limpa o formulário após o cadastro
      alert('Cliente cadastrado com sucesso!'); // Mensagem de sucesso
    });
  }

  // Método para selecionar cliente
  selecionarCliente(posicao: number): void {
    this.cliente = this.clientes[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  // Método para editar cliente
  editar(): void {
    this.servico.editar(this.cliente).subscribe((retorno: Client) => {
      // Atualiza o cliente na lista
      const index = this.clientes.findIndex(c => c.codigo === retorno.codigo);
      if (index !== -1) {
        this.clientes[index] = retorno;
      }
      this.cliente = new Client(); // Limpa o formulário após a edição
      this.btnCadastro = true;
      this.tabela = true;
      alert('Cliente editado com sucesso!'); // Mensagem de sucesso
    });
  }

  // Método para remover cliente
  remover(): void {
    this.servico.remover(this.cliente.codigo).subscribe(() => {
      this.clientes = this.clientes.filter(c => c.codigo !== this.cliente.codigo);
      this.cliente = new Client(); // Limpa o formulário após a remoção
      this.btnCadastro = true;
      this.tabela = true;
      alert('Cliente removido com sucesso!'); // Mensagem de sucesso
    });
  }

  // Método para cancelar a edição
  cancelar(): void {
    this.cliente = new Client(); // Limpa o formulário
    this.btnCadastro = true;
    this.tabela = true;
  }

  // Método de inicialização (ao iniciar)
  ngOnInit() {
    this.selecionar();
  }
}