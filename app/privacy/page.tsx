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

                <h2 className="mt-5">2. Identificação do Controlador</h2>
                <p>
                  A Division Flow, inscrita no CNPJ nº 63.433.055/0001-05, sob
                  a razão social 63.433.055 Bernardo Luiz Werner Mesquita, com
                  sede na Travessa Mario Cutruneo, nº 88, Esteio/RS, CEP
                  93285-230, é a controladora dos dados pessoais tratados nos
                  termos descritos nesta Política de Privacidade, ressalvadas
                  as hipóteses em que atua como operadora, conforme detalhado
                  na seção 3.
                </p>

                <h2 className="mt-5">3. Papéis de Controladora e Operadora</h2>
                <p>
                  <strong>Atuação como controladora:</strong> A Division Flow
                  atua como controladora dos dados pessoais necessários à
                  criação e administração das contas de seus usuários,
                  relacionamento contratual, segurança da plataforma e demais
                  finalidades determinadas diretamente pela Division Flow.
                </p>
                <p>
                  <strong>Atuação como operadora:</strong> Em relação aos
                  dados pessoais inseridos pelo usuário em seu workspace
                  referentes a seus próprios clientes, leads, colaboradores ou
                  terceiros, a Division Flow atuará, em regra, como operadora,
                  realizando o tratamento necessário à prestação do serviço de
                  acordo com as instruções do usuário, que permanecerá
                  responsável pelas decisões referentes às finalidades do
                  tratamento.
                </p>
                <p>
                  Quando o usuário inserir em seu workspace dados pessoais
                  sensíveis, caberá a ele, na qualidade de controlador desses
                  dados, assegurar a existência de hipótese legal adequada
                  para o tratamento e fornecer à Division Flow as instruções
                  necessárias à execução dos serviços, sem prejuízo das
                  obrigações próprias da Division Flow como operadora,
                  conforme Art. 14 da LGPD.
                </p>

                <h2 className="mt-5">4. Dados coletados</h2>

                <h3 className="mt-4">4.1 Dados fornecidos pelo usuário</h3>
                <ul>
                  <li>Nome e endereço de e-mail (cadastro e autenticação)</li>
                  <li>Nome do workspace e dados de configuração da conta</li>
                  <li>
                    Informações inseridas pelo usuário na plataforma
                    (clientes, projetos, contratos, leads)
                  </li>
                </ul>

                <h3 className="mt-4">4.2 Dados coletados automaticamente</h3>
                <ul>
                  <li>Endereço IP e dados de navegação</li>
                  <li>Tipo de dispositivo, navegador e sistema operacional</li>
                  <li>Logs de acesso e atividade dentro da plataforma</li>
                </ul>

                <h3 className="mt-4">4.3 Dados de pagamento</h3>
                <p>
                  A Division Flow não armazena dados de cartão de crédito ou
                  informações bancárias. O processamento de pagamentos é
                  realizado integralmente por gateways terceiros, que possuem
                  suas próprias políticas de segurança e privacidade.
                </p>

                <h2 className="mt-5">5. Finalidade do tratamento</h2>
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

                <h2 className="mt-5">6. Compartilhamento de dados</h2>
                <p>
                  Não vendemos dados pessoais. Podemos compartilhá-los com
                  prestadores de serviço operacionais (hospedagem, e-mail
                  transacional, análise de uso e gateway de pagamento) que
                  atuam como operadores sob nossas instruções, e com
                  autoridades competentes quando exigido por lei.
                </p>

                <h2 className="mt-5">7. Retenção</h2>
                <p>
                  Os dados são mantidos enquanto a conta estiver ativa. Após o
                  cancelamento, os dados são retidos por até 90 dias para fins
                  de recuperação e, em seguida, excluídos, salvo obrigação
                  legal em contrário, ressalvadas as hipóteses de conservação
                  permitidas pelo Art. 16 da LGPD.
                </p>

                <h2 className="mt-5">8. Seus direitos</h2>
                <p>
                  Nos termos do Art. 18 da LGPD, você, na condição de titular
                  dos dados, pode solicitar à Division Flow:
                </p>
                <ul>
                  <li>
                    confirmação da existência de tratamento de dados
                    pessoais;
                  </li>
                  <li>acesso aos seus dados;</li>
                  <li>
                    correção de dados incompletos, inexatos ou
                    desatualizados;
                  </li>
                  <li>
                    anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade
                    com a LGPD;
                  </li>
                  <li>
                    portabilidade dos dados a outro fornecedor de serviço ou
                    produto, mediante requisição expressa;
                  </li>
                  <li>
                    eliminação dos dados pessoais tratados com base no seu
                    consentimento, exceto nas hipóteses de conservação
                    previstas no Art. 16 da LGPD;
                  </li>
                  <li>
                    informação sobre as entidades públicas e privadas com as
                    quais compartilhamos seus dados;
                  </li>
                  <li>
                    informação sobre a possibilidade de não fornecer
                    consentimento e sobre as consequências dessa negativa;
                  </li>
                  <li>
                    revogação do consentimento a qualquer momento, mediante
                    manifestação expressa.
                  </li>
                </ul>
                <p>
                  O consentimento, quando for a base legal do tratamento, é
                  livre, informado e específico, podendo ser revogado a
                  qualquer momento, sem que isso afete a licitude do
                  tratamento realizado antes da revogação. Você também pode
                  peticionar em relação aos seus dados perante a Autoridade
                  Nacional de Proteção de Dados (ANPD).
                </p>
                <p>
                  Para exercer qualquer desses direitos, entre em contato pelo
                  e-mail contato@divisiondev.com.br. Respondemos em até 15
                  dias corridos.
                </p>

                <h2 className="mt-5">9. Encarregado (DPO)</h2>
                <p>
                  O encarregado pelo tratamento de dados pessoais (Data
                  Protection Officer) da Division Flow é Bernardo Luiz Werner
                  Mesquita, que pode ser contatado pelo e-mail
                  contato@divisiondev.com.br para dúvidas, solicitações ou
                  reclamações relacionadas ao tratamento de dados pessoais.
                </p>

                <h2 className="mt-5">10. Segurança</h2>
                <p>
                  Adotamos medidas técnicas adequadas, incluindo comunicação
                  criptografada via HTTPS, controle de acesso por autenticação
                  e isolamento de dados por workspace.
                </p>

                <h2 className="mt-5">11. Alterações</h2>
                <p>
                  Notificaremos usuários ativos por e-mail em caso de
                  alterações relevantes. A data de &quot;última
                  atualização&quot; no topo reflete a versão vigente.
                </p>

                <h2 className="mt-5">12. Contato</h2>
                <p>
                  E-mail: contato@divisiondev.com.br
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
