import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Conheça os termos e condições de uso da plataforma ${SITE_NAME}.`,
};

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <section className="mb-5" style={{ paddingTop: "180px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h1>Termos de Uso</h1>
                <p>Última atualização: julho de 2026</p>

                <h2 className="mt-5">1. Aceitação</h2>
                <p>
                  Ao criar uma conta ou utilizar a plataforma Division Flow,
                  você concorda com estes Termos de Uso.
                </p>

                <h2 className="mt-5">2. O serviço</h2>
                <p>
                  A Division Flow é uma plataforma SaaS de gestão de
                  projetos, clientes, contratos e leads voltada para agências
                  e freelancers, fornecida mediante assinatura de um dos
                  planos disponíveis.
                </p>

                <h2 className="mt-5">3. Cadastro e conta</h2>
                <ul>
                  <li>
                    Você deve fornecer informações verdadeiras e mantê-las
                    atualizadas.
                  </li>
                  <li>
                    Você é responsável pela confidencialidade das suas
                    credenciais de acesso.
                  </li>
                  <li>
                    Compartilhamento de credenciais entre pessoas não
                    autorizadas é proibido.
                  </li>
                  <li>
                    A Division Flow pode suspender contas com indícios de uso
                    indevido.
                  </li>
                </ul>

                <h2 className="mt-5">4. Planos e pagamento</h2>
                <ul>
                  <li>
                    O acesso está condicionado ao pagamento da assinatura
                    conforme o plano escolhido.
                  </li>
                  <li>
                    Cobranças recorrentes (mensal ou anual) via gateway de
                    pagamento terceiro.
                  </li>
                  <li>
                    A Division Flow não armazena dados de cartão de crédito.
                  </li>
                  <li>
                    O não pagamento resultará na suspensão do acesso após o
                    período de carência aplicável.
                  </li>
                </ul>

                <h2 className="mt-5">5. Uso aceitável</h2>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Permitido</th>
                      <th>Não permitido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gerenciar clientes, projetos, contratos e leads</td>
                      <td>Atividades ilegais ou fraudulentas</td>
                    </tr>
                    <tr>
                      <td>Armazenar conteúdo próprio da sua operação</td>
                      <td>
                        Armazenar conteúdo que viole direitos de terceiros
                      </td>
                    </tr>
                    <tr>
                      <td>Convidar membros da sua equipe</td>
                      <td>
                        Tentar acessar ou danificar a infraestrutura da
                        plataforma
                      </td>
                    </tr>
                    <tr>
                      <td>Integrar com ferramentas autorizadas</td>
                      <td>Revender o acesso sem autorização expressa</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="mt-5">6. Dados do usuário</h2>
                <p>
                  Os dados e conteúdos inseridos pelo usuário permanecerão
                  sob sua responsabilidade e controle, sem que sua inserção na
                  plataforma implique transferência à Division Flow da
                  titularidade ou de quaisquer direitos sobre o conteúdo.
                  Tratando-se de dados pessoais de terceiros, serão
                  preservados os direitos dos respectivos titulares previstos
                  na LGPD. Quando o usuário atuar como controlador dos dados
                  pessoais inseridos no workspace, caberá a ele assegurar a
                  existência de hipótese legal adequada para o tratamento e
                  fornecer à Division Flow as instruções necessárias à
                  execução dos serviços.
                </p>
                <p>
                  A Division Flow não realiza acesso humano ao conteúdo dos
                  workspaces, salvo quando necessário para atendimento de
                  solicitação de suporte, cumprimento de obrigação legal,
                  segurança da plataforma ou outras hipóteses previstas nestes
                  Termos. O processamento automatizado necessário ao
                  armazenamento e funcionamento da plataforma ocorrerá
                  normalmente durante a prestação dos serviços.
                </p>

                <h2 className="mt-5">7. Disponibilidade</h2>
                <p>
                  A Division Flow não garante disponibilidade ininterrupta.
                  Manutenções programadas serão comunicadas com antecedência
                  sempre que possível. Não nos responsabilizamos por perdas
                  decorrentes de indisponibilidade temporária.
                </p>

                <h2 className="mt-5">8. Limitação de responsabilidade</h2>
                <p>
                  A Division Flow não se responsabiliza por perda de dados
                  causada por falha do usuário em realizar backups, danos
                  indiretos ou lucros cessantes, ou danos causados por acesso
                  indevido via credenciais do usuário.
                </p>

                <h2 className="mt-5">9. Propriedade intelectual</h2>
                <p>
                  A marca, código, design e materiais da Division Flow não
                  podem ser reproduzidos ou utilizados sem autorização
                  expressa.
                </p>

                <h2 className="mt-5">10. Cancelamento</h2>
                <p>
                  O usuário pode cancelar a qualquer momento pelo painel da
                  conta. O acesso permanece ativo até o fim do período pago.
                  Sem cobrança adicional após o cancelamento.
                </p>

                <h2 className="mt-5">11. Alterações nos termos</h2>
                <p>
                  Alterações relevantes serão comunicadas por e-mail com
                  antecedência mínima de 15 dias. O uso continuado implica
                  aceitação.
                </p>

                <h2 className="mt-5">12. Lei aplicável</h2>
                <p>Estes termos são regidos pela legislação brasileira.</p>

                <h2 className="mt-5">13. Contato</h2>
                <p>
                  E-mail: divisiondevservices@gmail.com
                  <br />
                  Site: divisionflow.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
