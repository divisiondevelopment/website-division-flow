import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Saiba como o ${SITE_NAME} coleta, usa, armazena e protege os dados pessoais dos seus usuários.`,
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
                <h1>Política de Privacidade</h1>
                <p>Última atualização: julho de 2026</p>

                <h2 className="mt-5">1. Sobre este documento</h2>
                <p>
                  Esta Política de Privacidade descreve como a Division Flow
                  coleta, utiliza, armazena e compartilha dados pessoais de
                  usuários da plataforma e do site institucional, em
                  conformidade com a Lei Geral de Proteção de Dados (Lei nº
                  13.709/2018 — LGPD).
                </p>

                <h2 className="mt-5">2. Dados coletados</h2>

                <h3 className="mt-4">2.1 Dados fornecidos pelo usuário</h3>
                <ul>
                  <li>Nome e endereço de e-mail (cadastro e autenticação)</li>
                  <li>Nome do workspace e dados de configuração da conta</li>
                  <li>
                    Informações inseridas pelo usuário na plataforma
                    (clientes, projetos, contratos, leads)
                  </li>
                </ul>

                <h3 className="mt-4">2.2 Dados coletados automaticamente</h3>
                <ul>
                  <li>Endereço IP e dados de navegação</li>
                  <li>Tipo de dispositivo, navegador e sistema operacional</li>
                  <li>Logs de acesso e atividade dentro da plataforma</li>
                </ul>

                <h3 className="mt-4">2.3 Dados de pagamento</h3>
                <p>
                  A Division Flow não armazena dados de cartão de crédito ou
                  informações bancárias. O processamento de pagamentos é
                  realizado integralmente por gateways terceiros, que possuem
                  suas próprias políticas de segurança e privacidade.
                </p>

                <h2 className="mt-5">3. Finalidade do tratamento</h2>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Finalidade</th>
                      <th>Base legal (LGPD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Criação e gestão de conta</td>
                      <td>Execução de contrato</td>
                    </tr>
                    <tr>
                      <td>Prestação dos serviços da plataforma</td>
                      <td>Execução de contrato</td>
                    </tr>
                    <tr>
                      <td>Comunicações transacionais</td>
                      <td>Execução de contrato</td>
                    </tr>
                    <tr>
                      <td>Comunicações de produto (se optou)</td>
                      <td>Consentimento</td>
                    </tr>
                    <tr>
                      <td>Análise de uso para melhoria da plataforma</td>
                      <td>Legítimo interesse</td>
                    </tr>
                    <tr>
                      <td>Prevenção a fraudes e segurança</td>
                      <td>Legítimo interesse</td>
                    </tr>
                    <tr>
                      <td>Cumprimento de obrigações legais</td>
                      <td>Obrigação legal</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="mt-5">4. Compartilhamento de dados</h2>
                <p>
                  Não vendemos dados pessoais. Podemos compartilhá-los com
                  prestadores de serviço operacionais (hospedagem, e-mail
                  transacional, análise de uso e gateway de pagamento) que
                  atuam como operadores sob nossas instruções, e com
                  autoridades competentes quando exigido por lei.
                </p>

                <h2 className="mt-5">5. Retenção</h2>
                <p>
                  Os dados são mantidos enquanto a conta estiver ativa. Após o
                  cancelamento, os dados são retidos por até 90 dias para fins
                  de recuperação e, em seguida, excluídos, salvo obrigação
                  legal em contrário.
                </p>

                <h2 className="mt-5">6. Seus direitos</h2>
                <p>
                  Nos termos da LGPD, você pode: confirmar a existência de
                  tratamento, acessar seus dados, corrigir dados
                  desatualizados, solicitar exclusão, revogar consentimento
                  para marketing e solicitar portabilidade. Contato:
                  divisiondevservices@gmail.com. Respondemos em até 15 dias
                  corridos.
                </p>

                <h2 className="mt-5">7. Segurança</h2>
                <p>
                  Adotamos medidas técnicas adequadas, incluindo comunicação
                  criptografada via HTTPS, controle de acesso por autenticação
                  e isolamento de dados por workspace.
                </p>

                <h2 className="mt-5">8. Alterações</h2>
                <p>
                  Notificaremos usuários ativos por e-mail em caso de
                  alterações relevantes. A data de &quot;última
                  atualização&quot; no topo reflete a versão vigente.
                </p>

                <h2 className="mt-5">9. Contato</h2>
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
