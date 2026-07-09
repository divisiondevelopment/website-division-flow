import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Política de Reembolso",
  description: `Entenda as condições de reembolso e cancelamento dos planos do ${SITE_NAME}.`,
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
                <h1>Política de Reembolso</h1>
                <p>Última atualização: julho de 2026</p>

                <h2 className="mt-5">1. Período de garantia</h2>
                <p>
                  A Division Flow oferece garantia de reembolso integral de 7
                  dias a partir da data da primeira cobrança, sem necessidade
                  de justificativa, conforme o direito de arrependimento
                  previsto no art. 49 do Código de Defesa do Consumidor.
                  Solicitações pelo e-mail divisiondevservices@gmail.com.
                </p>

                <h2 className="mt-5">2. Fora do período de garantia</h2>
                <p>
                  Após os 7 dias iniciais, não realizamos reembolsos
                  proporcionais por período não utilizado, em planos mensais
                  ou anuais. O usuário pode cancelar a qualquer momento; o
                  acesso permanece ativo até o fim do ciclo de cobrança em
                  curso.
                </p>

                <h2 className="mt-5">3. Planos anuais</h2>
                <p>
                  Reembolso integral disponível nos primeiros 7 dias. Após
                  esse período, sem reembolso proporcional pelos meses
                  restantes, mas com acesso mantido até o fim do período
                  contratado.
                </p>

                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Situação</th>
                      <th>Prazo</th>
                      <th>Condição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Primeira cobrança (mensal ou anual)</td>
                      <td>7 dias</td>
                      <td>Reembolso integral</td>
                    </tr>
                    <tr>
                      <td>Após os 7 dias iniciais</td>
                      <td>—</td>
                      <td>
                        Sem reembolso proporcional; acesso mantido até o fim
                        do ciclo/período contratado
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="mt-5">4. Exceções</h2>
                <p>
                  A Division Flow pode avaliar situações excepcionais, como
                  falha grave de serviço que tenha impedido o uso da
                  plataforma por período prolongado. Entre em contato
                  descrevendo a situação.
                </p>

                <h2 className="mt-5">5. Processamento</h2>
                <p>
                  Reembolsos aprovados são processados em até 10 dias úteis
                  pelo gateway de pagamento. O prazo de crédito na fatura
                  depende da operadora do cartão.
                </p>

                <h2 className="mt-5">6. Contato</h2>
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
