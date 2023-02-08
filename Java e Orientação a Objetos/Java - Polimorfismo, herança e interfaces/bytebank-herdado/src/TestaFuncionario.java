public class TestaFuncionario {
    public static void main(String[] args) {
        Funcionario luiz = new Funcionario();

        luiz.setNome("Luiz Henrique");
        luiz.setCpf("123.456.789-10");
        luiz.setSalario(3500.00);

        System.out.println(luiz.getNome());
        System.out.println(luiz.getTipo());
        System.out.println(luiz.getBonificacao());

        Funcionario f2 = new Funcionario();
        
        f2.setTipo(1);
        f2.setSalario(5000.00);

        System.out.println(f2.getTipo());
        System.out.println(f2.getSalario());
        System.out.println(f2.getBonificacao());
    }
}
