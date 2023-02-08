public class Funcionario {
    
    private String nome;
    private String cpf;
    private Double salario;
    private int tipo = 0; // 0 = Funcionário comum; 1 = Gerente; Outro = Diretor;

    public Funcionario() {

    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public int getTipo() {
        return tipo;
    }

    public Double getBonificacao() {
        if(this.tipo == 0){
            return this.salario * 0.1;
        }

        if(this.tipo == 1){
            return this.salario;
        }

        return this.salario + 1000;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }
}
