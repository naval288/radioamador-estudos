"use strict";

/* ============================================================
   COER Classe C — Guia de Estudos 2026
   Fonte de conteúdo: D:\download\COER_Classe_C_Guia_Completo_2026.md
   Material didático independente, sem vínculo com a Anatel.
   ============================================================ */

const LESSONS = [
  {
    id: "aula-1",
    number: 1,
    part: "Legislação",
    title: "Fundamentos e órgãos do radioamadorismo",
    short: "Finalidade do serviço, Anatel, UIT, IARU, LABRE e as normas da ementa.",
    duration: "14 min",
    objectives: [
      "Definir o Serviço de Radioamador e sua finalidade.",
      "Distinguir as competências de Anatel, UIT, IARU e LABRE.",
      "Diferenciar atribuição, destinação e licença.",
      "Reconhecer as principais normas citadas na ementa de 2026."
    ],
    sections: [
      {
        title: "O que é o Serviço de Radioamador",
        html: `
          <p>O Serviço de Radioamador é voltado à <strong>intercomunicação, ao treinamento próprio e a investigações técnicas</strong>, realizado por pessoas habilitadas e autorizadas, <strong>sem finalidade pecuniária ou comercial</strong>.</p>
          <p>Ele não é equivalente a um serviço profissional de segurança privada, táxi, logística ou radiocomunicação empresarial. Pode apoiar comunicação solidária e de emergência, dentro das regras aplicáveis.</p>
          <div class="callout"><p><strong>Pegadinha:</strong> ser militar, ter experiência em comunicações ou possuir um transceptor <strong>não substitui</strong> a habilitação e o licenciamento exigidos para transmitir no serviço de radioamador.</p></div>
        `
      },
      {
        title: "Quem faz o quê",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Anatel</strong>Disciplina, administra o espectro, habilita operadores, licencia estações, fiscaliza e aplica sanções conforme a legislação.</div>
            <div class="mini-card"><strong>UIT / ITU</strong>Organização internacional cujo Regulamento de Radiocomunicações estrutura atribuições e princípios de compatibilidade entre serviços.</div>
            <div class="mini-card"><strong>IARU</strong>Entidade do radioamadorismo internacional; seus planos de banda orientam boas práticas e segmentação, sem substituir a norma brasileira.</div>
            <div class="mini-card"><strong>LABRE</strong>Entidade representativa de radioamadores no Brasil; orienta e apoia, mas não emite COER no lugar da Anatel.</div>
          </div>
          <p>Guarde a hierarquia: quem regula e fiscaliza no Brasil é a <strong>Anatel</strong>. A UIT define o quadro internacional. A IARU e a LABRE contribuem com planos, orientação e representação, mas não se sobrepõem à regulamentação nacional.</p>
        `
      },
      {
        title: "As normas da ementa de 2026",
        html: `
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>Norma ou documento</th><th>O que estudar</th></tr>
              </thead>
              <tbody>
                <tr><td>Lei nº 9.472/1997 (LGT)</td><td>Organização e fiscalização das telecomunicações no Brasil.</td></tr>
                <tr><td>Resolução Anatel nº 777/2025 (RGST)</td><td>Regras gerais dos serviços de telecomunicações.</td></tr>
                <tr><td>Ato Anatel nº 3448/2026</td><td>Operação, indicativos, qualificação, formato das provas e isenções.</td></tr>
                <tr><td>Ato Anatel nº 926/2024</td><td>Requisitos técnicos, frequências, modalidades e potências do radioamador.</td></tr>
                <tr><td>Resolução nº 772/2025 (PDFF)</td><td>Atribuição, destinação e distribuição do espectro.</td></tr>
                <tr><td>Resolução nº 715/2019</td><td>Avaliação da conformidade e homologação de produtos.</td></tr>
                <tr><td>Resolução nº 719/2020 (RGL)</td><td>Licenciamento de estações.</td></tr>
                <tr><td>Resolução nº 720/2020 (RGO)</td><td>Regras gerais de outorga.</td></tr>
                <tr><td>Regulamento de Rádio da UIT</td><td>Administração internacional das frequências e prevenção de interferência.</td></tr>
                <tr><td>ITU-R M.1544-1</td><td>Competências mínimas de operadores de radioamador.</td></tr>
                <tr><td>Plano de bandas IARU — Região 2</td><td>Planejamento operacional regional nas Américas.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Atribuição, destinação e licença",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Atribuição</strong>Reserva a faixa a serviços de radiocomunicações.</div>
            <div class="mini-card"><strong>Destinação</strong>Trata do uso de faixas por serviços no Brasil.</div>
            <div class="mini-card"><strong>Licença de estação</strong>Autoriza o funcionamento de uma estação específica nas condições pertinentes.</div>
          </div>
          <p>A <strong>distinção recorrente em questões</strong> é justamente essa: atribuição, destinação e licença não são sinônimos. Além disso, nenhuma tabela da IARU autoriza isoladamente uma transmissão proibida pela Anatel.</p>
          <div class="callout exam"><p><strong>Regra de ouro:</strong> o plano de bandas orienta; a norma brasileira obriga. Em caso de conflito aparente, prevalece a regulamentação nacional.</p></div>
        `
      }
    ],
    traps: [
      {
        myth: "O plano de bandas da IARU revoga os limites da Anatel.",
        truth: "Não. A IARU orienta boas práticas; a norma brasileira continua obrigatória."
      },
      {
        myth: "A LABRE pode emitir COER no lugar da Anatel.",
        truth: "A LABRE orienta e representa; a habilitação é competência da Anatel."
      },
      {
        myth: "Militar com experiência em comunicações já pode transmitir sem habilitação.",
        truth: "Experiência e equipamento não substituem COER e licença da estação."
      }
    ],
    flashcards: [
      {
        front: "Qual é a finalidade do Serviço de Radioamador?",
        back: "Intercomunicação, treinamento próprio e investigações técnicas, sem finalidade pecuniária ou comercial."
      },
      {
        front: "O que é atribuição?",
        back: "A reserva de uma faixa a serviços de radiocomunicações."
      },
      {
        front: "Qual órgão habilita, licencia e fiscaliza o radioamador no Brasil?",
        back: "Anatel."
      }
    ],
    quiz: [
      {
        statement: "A Anatel é o órgão responsável pela regulamentação, habilitação e fiscalização do serviço de radioamador no Brasil.",
        answer: true,
        explanation: "A competência nacional é da Anatel; UIT, IARU e LABRE têm papéis distintos."
      },
      {
        statement: "Um plano de bandas da IARU pode revogar, por si só, os limites de frequência e potência fixados pela regulamentação brasileira.",
        answer: false,
        explanation: "O plano da IARU não substitui a norma nacional. Ele orienta, mas não revoga a regulamentação da Anatel."
      }
    ],
    sourceIds: [1, 5]
  },
  {
    id: "aula-2",
    number: 2,
    part: "Legislação",
    title: "COER, licença, indicativo e obrigações",
    short: "As três autorizações, regras de identificação, chamada e terceiros.",
    duration: "17 min",
    objectives: [
      "Diferenciar COER, autorização e licença de estação.",
      "Aplicar as regras de identificação e de chamada.",
      "Explicar o uso da estação por terceiro sem COER.",
      "Reconhecer restrições a mensagens internacionais e o papel da IARP.",
      "Memorizar os prazos e limites operacionais do Ato 3448/2026."
    ],
    sections: [
      {
        title: "Três coisas diferentes",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>COER</strong>Certifica que a pessoa tem qualificação para operar estação de radioamador na classe correspondente.</div>
            <div class="mini-card"><strong>Autorização / outorga</strong>Direitos administrativos necessários conforme o regime aplicável, incluindo o uso de radiofrequências.</div>
            <div class="mini-card"><strong>Licença da estação</strong>Regulariza uma estação específica — fixa, móvel ou outra modalidade aplicável — e seu indicativo.</div>
          </div>
          <p><strong>Regra de prova:</strong> o COER, sozinho, não substitui a licença da estação. O operador habilitado pode utilizar estação regular em conformidade com sua classe e demais condições legais.</p>
        `
      },
      {
        title: "Classes C, B e A",
        html: `
          <p>A classe define requisitos de qualificação e <strong>quais segmentos, modos e potências são permitidos</strong>. Classe superior não é passe livre para transmitir em qualquer frequência: continua obrigatório seguir o ato técnico em vigor.</p>
          <p>O <strong>Ato 3448/2026</strong> traz requisitos de prova por classe; o <strong>Ato 926/2024</strong> contém as condições técnicas de uso. Para uma frequência concreta, consulte a tabela atual em vez de decorar apenas nomes gerais de bandas.</p>
        `
      },
      {
        title: "Indicativo de chamada",
        html: `
          <p>O <strong>indicativo</strong> identifica a estação e deve ser utilizado no <strong>início, durante e ao final</strong> dos comunicados, sem supressões ou acréscimos indevidos. Não substitua a identificação por apelido, nome próprio ou número inventado.</p>
          <ul>
            <li>Em comunicado estabelecido, mencione os indicativos das duas estações.</li>
            <li>Verifique se o canal está livre antes de transmitir.</li>
            <li>Repita a chamada <strong>no máximo três vezes consecutivas</strong> e passe à escuta.</li>
            <li>Limite, como regra, a transmissão entre estações a <strong>10 minutos</strong>, exceto emergências.</li>
          </ul>
        `
      },
      {
        title: "Terceiros, prazo e regularidade",
        html: `
          <p>O item 4.2 do Ato 3448/2026 admite a utilização da estação por terceiro sem COER <strong>sob supervisão do responsável com COER</strong>, desde que respeitadas as normas e a ética. Isso não equivale a licença genérica para operar de forma independente.</p>
          <p><strong>Mensagens internacionais de terceiros:</strong> o item 4.3 restringe esse tráfego, com exceções para emergência, desastre ou acordo específico com reciprocidade. Não generalize a exceção para qualquer recado comercial ou particular.</p>
          <p><strong>Operação no exterior:</strong> o Ato prevê a <strong>IARP</strong> (Permissão Internacional de Radioamador), condicionada a requisitos próprios, inclusive COER e licença regular de estação móvel, e com validade limitada. O COER brasileiro não significa liberdade irrestrita para transmitir fora do país.</p>
          <p>O Ato estabelece <strong>20 anos</strong> para a vigência da autorização de uso de radiofrequências do serviço, ressalvadas as condições aplicáveis. Manter os dados da estação atualizados é responsabilidade do autorizado.</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>Regra</th><th>Número</th></tr>
              </thead>
              <tbody>
                <tr><td>Identificação da estação</td><td>Início, durante e término</td></tr>
                <tr><td>Chamadas consecutivas antes da escuta</td><td>No máximo 3</td></tr>
                <tr><td>Duração usual de uma transmissão entre estações</td><td>Até 10 minutos</td></tr>
                <tr><td>Vigência da autorização de uso de radiofrequências</td><td>20 anos</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    traps: [
      {
        myth: "O COER autoriza automaticamente transmitir com qualquer estação e em qualquer frequência.",
        truth: "Não. O COER habilita a pessoa; a estação precisa de licença e a operação segue classe e ato técnico."
      },
      {
        myth: "O indicativo só precisa ser dito no início do comunicado.",
        truth: "Deve identificar a estação no início, durante e ao término."
      },
      {
        myth: "Pode-se chamar indefinidamente até alguém responder.",
        truth: "No máximo três chamadas consecutivas antes de voltar à escuta."
      },
      {
        myth: "Terceiro sem COER pode operar sozinho se o rádio for de um radioamador.",
        truth: "A utilização por terceiro exige supervisão do responsável com COER."
      }
    ],
    flashcards: [
      {
        front: "O COER substitui a licença da estação?",
        back: "Não. São documentos distintos: COER habilita a pessoa; a licença regulariza a estação."
      },
      {
        front: "Quantas chamadas consecutivas são permitidas antes da escuta?",
        back: "No máximo três."
      },
      {
        front: "Qual é o limite usual de transmissão entre estações?",
        back: "10 minutos, exceto emergências."
      }
    ],
    quiz: [
      {
        statement: "O indicativo de chamada deve identificar a estação no início, durante e no término dos comunicados.",
        answer: true,
        explanation: "Essa é a regra de identificação cobrada no item 10 do Ato 3448/2026."
      },
      {
        statement: "Um terceiro sem COER pode operar a estação de forma autônoma, desde que o equipamento pertença a um radioamador.",
        answer: false,
        explanation: "O terceiro sem COER só pode utilizar a estação sob supervisão do responsável habilitado."
      }
    ],
    sourceIds: [1, 2, 3]
  },
  {
    id: "aula-3",
    number: 3,
    part: "Técnica",
    title: "Frequências, potência, estações e modos",
    short: "Espectro, comprimento de onda, homologação, simplex/duplex e modulação.",
    duration: "18 min",
    objectives: [
      "Calcular comprimento de onda pela fórmula aproximada.",
      "Identificar as quatro condições antes de transmitir.",
      "Diferenciar receptor, transmissor, transceptor e repetidora.",
      "Distinguir simplex, semiduplex, duplex e split.",
      "Reconhecer AM, FM, SSB, CW e modos digitais."
    ],
    sections: [
      {
        title: "Espectro, faixa e canal",
        html: `
          <p><strong>Frequência</strong> é o número de oscilações por segundo, medido em hertz (Hz). <strong>Faixa ou banda</strong> é um intervalo de frequências. <strong>Canal</strong> é uma frequência ou combinação de parâmetros operacionais designada para determinado uso.</p>
          <p><strong>Modo de emissão</strong> é como a informação é transportada — voz em FM, SSB, CW, modos digitais. <strong>Potência</strong> é o limite da estação ou emissão conforme o segmento e a classe.</p>
        `
      },
      {
        title: "Frequência e comprimento de onda",
        html: `
          <p>Relação aproximada no espaço livre: <strong>λ = 300 / f</strong>, com λ em metros e f em MHz.</p>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Frequência</th><th class="num">Comprimento de onda</th></tr></thead>
              <tbody>
                <tr><td>3,5 MHz</td><td class="num">85,7 m</td></tr>
                <tr><td>7 MHz</td><td class="num">42,9 m</td></tr>
                <tr><td>14 MHz</td><td class="num">21,4 m</td></tr>
                <tr><td>144 MHz</td><td class="num">2,08 m</td></tr>
                <tr><td>430 MHz</td><td class="num">0,70 m</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><p><strong>Não confunda:</strong> “faixa de 2 metros” é apelido usual aproximado da faixa amadora de VHF; não significa que toda frequência desse grupo tenha exatamente 2,000 m.</p></div>
        `
      },
      {
        title: "Bandas do espectro",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Banda</th><th>Intervalo aproximado</th><th>Característica frequente</th></tr></thead>
              <tbody>
                <tr><td>VLF</td><td>3–30 kHz</td><td>Grande comprimento de onda.</td></tr>
                <tr><td>LF</td><td>30–300 kHz</td><td>Onda terrestre relevante.</td></tr>
                <tr><td>MF</td><td>0,3–3 MHz</td><td>Ondas terrestres e ionosféricas.</td></tr>
                <tr><td>HF</td><td>3–30 MHz</td><td>Propagação ionosférica importante.</td></tr>
                <tr><td>VHF</td><td>30–300 MHz</td><td>Frequentemente linha de visada.</td></tr>
                <tr><td>UHF</td><td>300–3.000 MHz</td><td>Linha de visada e obstáculos locais.</td></tr>
                <tr><td>SHF</td><td>3–30 GHz</td><td>Enlaces direcionais e micro-ondas.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Quatro condições antes de transmitir",
        html: `
          <p>Antes de operar, confirme quatro condições:</p>
          <ol>
            <li><strong>Segmento autorizado</strong> ao radioamador.</li>
            <li><strong>Classe do operador</strong>.</li>
            <li><strong>Modo permitido</strong>.</li>
            <li><strong>Limite de potência</strong>.</li>
          </ol>
          <p>Observe também o caráter primário ou secundário da atribuição, quando aplicável, e a necessidade de evitar interferência prejudicial. Consulte sempre a versão atualizada do ato técnico.</p>
          <div class="callout"><p><strong>Pegadinha clássica:</strong> um rádio de 10 W não dá direito de transmitir 10 W em qualquer frequência. Mesmo que o equipamento sintonize aviação, polícia ou serviços privados, isso não autoriza transmissão nesses serviços.</p></div>
        `
      },
      {
        title: "Homologação não é habilitação",
        html: `
          <p>O regulamento de avaliação da conformidade e homologação estabelece a conformidade de produtos de telecomunicações. <strong>Homologação do rádio não substitui habilitação do operador nem licença da estação.</strong></p>
          <p>Inversamente, ter COER não faz um equipamento inadequado passar a cumprir requisitos técnicos. As três esferas são independentes.</p>
        `
      },
      {
        title: "Estações e modos de operação",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Receptor</strong>Antena, filtro/sintonia, amplificação/conversão, demodulação e áudio/dados. Recebe, mas não transmite.</div>
            <div class="mini-card"><strong>Transmissor</strong>Áudio/dados, processamento/modulação, oscilador/síntese, amplificação de RF, filtro e antena.</div>
            <div class="mini-card"><strong>Transceptor</strong>Integra transmissão e recepção no mesmo equipamento, como um portátil VHF/UHF.</div>
            <div class="mini-card"><strong>Repetidora</strong>Recebe e retransmite em condição/frequência prevista, permitindo comunicação indireta; pode exigir offset e tom.</div>
          </div>
          <div class="mini-grid">
            <div class="mini-card"><strong>Simplex</strong>Turnos alternados, frequentemente na mesma frequência.</div>
            <div class="mini-card"><strong>Semiduplex</strong>Comunicação alternada entre duas frequências, comum em repetidoras convencionais.</div>
            <div class="mini-card"><strong>Duplex pleno</strong>Transmissão e recepção simultâneas, se o sistema suportar.</div>
            <div class="mini-card"><strong>Split</strong>Transmissão em uma frequência e recepção em outra, conforme o plano operacional.</div>
          </div>
          <p><strong>PTT</strong> é a tecla para transmitir e não deve ser mantida apertada sem necessidade. <strong>VFO</strong> permite selecionar a frequência. <strong>Squelch</strong> silencia o áudio na ausência de sinal suficiente. <strong>CTCSS/DCS</strong> são tons ou códigos de abertura de recepção/acesso; <strong>não oferecem criptografia nem privacidade real</strong>.</p>
        `
      },
      {
        title: "Modulação",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>AM</strong>A informação modifica a amplitude da portadora.</div>
            <div class="mini-card"><strong>FM</strong>A informação modifica a frequência instantânea da portadora.</div>
            <div class="mini-card"><strong>SSB</strong>Banda lateral única; eficiente para voz em HF.</div>
            <div class="mini-card"><strong>CW</strong>Telegrafia por chaveamento da portadora.</div>
            <div class="mini-card"><strong>Digitais</strong>Transportam dados com esquemas próprios e devem respeitar segmentos e regras.</div>
          </div>
          <p><strong>Batimento</strong> é o fenômeno relacionado à combinação de sinais com frequências ligeiramente diferentes, produzindo uma componente de diferença perceptível; é usado, por exemplo, em recepção de CW e SSB com oscilador apropriado.</p>
        `
      }
    ],
    traps: [
      {
        myth: "Um rádio de 10 W pode transmitir 10 W em qualquer frequência que consiga sintonizar.",
        truth: "A potência e a frequência dependem do segmento, da classe e do modo autorizado."
      },
      {
        myth: "CTCSS é criptografia e impede que terceiros escutem.",
        truth: "CTCSS apenas abre o squelch em sistemas compatíveis; não criptografa o áudio."
      },
      {
        myth: "Se o rádio é homologado, não precisa de licença de estação.",
        truth: "Homologação, habilitação e licenciamento são coisas distintas."
      }
    ],
    flashcards: [
      {
        front: "Qual é o comprimento de onda aproximado em 150 MHz?",
        back: "λ = 300 / 150 = 2 metros, no espaço livre."
      },
      {
        front: "O que caracteriza o simplex?",
        back: "Turnos alternados de transmissão e recepção, frequentemente na mesma frequência."
      },
      {
        front: "CTCSS oferece privacidade real?",
        back: "Não. É um tom de abertura de squelch/acesso, sem criptografia."
      }
    ],
    quiz: [
      {
        statement: "Um transceptor reúne funções de transmissão e recepção de sinais de rádio.",
        answer: true,
        explanation: "Transceptor é a integração de transmissor e receptor no mesmo equipamento."
      },
      {
        statement: "O CTCSS funciona como criptografia que impede terceiros de escutar uma comunicação analógica em FM.",
        answer: false,
        explanation: "CTCSS é um tom de acesso/abertura de squelch; não criptografa o áudio."
      }
    ],
    sourceIds: [1, 4]
  },
  {
    id: "aula-4",
    number: 4,
    part: "Técnica",
    title: "Antenas, cabos, ROE e relação sinal/ruído",
    short: "Dipolo, vertical, Yagi, perdas no cabo e o que a ROE realmente mede.",
    duration: "15 min",
    objectives: [
      "Reconhecer dipolo, vertical, Yagi, plano de terra e carga artificial.",
      "Relacionar polarização e ganho ao desempenho do enlace.",
      "Explicar perdas em cabo coaxial e conectores.",
      "Interpretar ROE e relação sinal/ruído corretamente."
    ],
    sections: [
      {
        title: "Antenas comuns",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Dipolo</strong>Dois elementos, com comportamento aproximadamente bidirecional no plano adequado.</div>
            <div class="mini-card"><strong>Vertical</strong>Pode ter padrão aproximadamente omnidirecional no plano horizontal, dependendo da instalação e do plano de terra.</div>
            <div class="mini-card"><strong>Yagi-Uda</strong>Direcional; concentra ganho em certa direção e pode rejeitar sinais de outras.</div>
            <div class="mini-card"><strong>Plano de terra</strong>Radiador vertical com radiais para melhorar a referência e as correntes de retorno.</div>
            <div class="mini-card"><strong>Carga artificial</strong>Dummy load: permite ensaiar transmissão sem irradiar como antena comum, se especificada para potência, frequência e impedância.</div>
          </div>
          <p><strong>Polarização</strong> é a orientação do campo elétrico da onda. Em VHF/UHF, antenas verticais tendem a funcionar melhor com outra vertical; polarizações diferentes podem causar perda.</p>
        `
      },
      {
        title: "Ganho não é potência criada",
        html: `
          <p>A antena <strong>redistribui espacialmente</strong> a energia radiada. Um sistema direcional pode alcançar melhor uma direção e pior outra. Ganho não significa que a antena criou potência do nada.</p>
          <p>Compare ganhos sempre na mesma unidade: <strong>dBi</strong> e <strong>dBd</strong> não são iguais. Uma antena com mais ganho em uma direção pode ser pior em outra.</p>
        `
      },
      {
        title: "Cabo coaxial e perdas",
        html: `
          <p>O cabo conduz energia de RF do rádio à antena. Quanto maior o comprimento e a frequência, maior tende a ser a atenuação, variando conforme o tipo de cabo e a qualidade.</p>
          <p>Conexões ruins e entrada de água degradam o sistema. Para antena externa elevada, verifique perdas, proteção mecânica, aterramento e proteção contra descargas atmosféricas. <strong>Não instale próximo à rede elétrica.</strong></p>
        `
      },
      {
        title: "ROE: o que ela mede",
        html: `
          <p>A ROE/SWR sinaliza <strong>desadaptação entre linha e carga</strong>. ROE próxima de <strong>1:1</strong> indica melhor casamento no ponto medido; valores elevados indicam reflexões maiores e justificam diagnóstico.</p>
          <div class="callout"><p><strong>Cuidado:</strong> ROE baixa não prova, por si só, boa eficiência de radiação ou alcance. O medidor de ROE mede a adequação da linha, não a “distância máxima” do rádio.</p></div>
          <p>Uma leitura ruim pode vir de antena desajustada, cabo defeituoso, conector mal instalado ou impedância incompatível. Diagnostique o conjunto, não apenas o número.</p>
        `
      },
      {
        title: "Relação sinal/ruído",
        html: `
          <p>A <strong>relação sinal/ruído (SNR)</strong> é a relação entre a potência do sinal útil e a potência de ruído. Melhor SNR costuma melhorar a inteligibilidade ou a decodificação.</p>
          <p>É possível melhorar a SNR com localização adequada da antena, redução de fontes de ruído, filtragem apropriada e uso de direção/ganho da antena. Aumentar potência sem cuidar da recepção e do ruído pode não resolver.</p>
        `
      }
    ],
    traps: [
      {
        myth: "ROE elevada é sempre sinal de ótimo casamento.",
        truth: "ROE alta sugere desadaptação e reflexões maiores; o ideal é próximo de 1:1."
      },
      {
        myth: "Ganho de antena cria potência adicional.",
        truth: "A antena redistribui a energia; não cria potência."
      },
      {
        myth: "ROE 1:1 garante o melhor alcance possível.",
        truth: "ROE baixa só indica bom casamento no ponto medido; não prova eficiência de radiação."
      }
    ],
    flashcards: [
      {
        front: "Para que serve uma antena Yagi-Uda?",
        back: "Para operação direcional, concentrando irradiação em uma direção e podendo rejeitar sinais de outras."
      },
      {
        front: "O que uma ROE próxima de 1:1 indica?",
        back: "Melhor casamento entre linha e carga no ponto medido."
      },
      {
        front: "Quando usar uma carga artificial?",
        back: "Em ensaios de transmissão, para não irradiar como antena comum, respeitando potência, frequência e impedância."
      }
    ],
    quiz: [
      {
        statement: "Uma ROE elevada é sempre sinal de ótimo casamento de impedâncias entre linha e antena.",
        answer: false,
        explanation: "ROE elevada sugere desadaptação e reflexões maiores; o bom casamento fica próximo de 1:1."
      },
      {
        statement: "A antena Yagi-Uda é geralmente direcional e útil para concentrar a irradiação em certa direção.",
        answer: true,
        explanation: "Esse é o comportamento típico da Yagi, ao contrário de uma vertical omnidirecional."
      }
    ],
    sourceIds: [1]
  },
  {
    id: "aula-5",
    number: 5,
    part: "Técnica",
    title: "Propagação e interferência",
    short: "Onda terrestre, ionosfera, HF x VHF/UHF e como diagnosticar interferências.",
    duration: "14 min",
    objectives: [
      "Diferenciar onda terrestre, linha de visada, ionosférica e troposférica.",
      "Comparar o comportamento prático de HF, VHF e UHF.",
      "Identificar co-canal, canal adjacente, intermodulação e harmônicos.",
      "Aplicar um procedimento básico diante de interferência."
    ],
    sections: [
      {
        title: "Como a onda chega",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Onda terrestre</strong>Acompanha a superfície terrestre em determinadas condições e frequências.</div>
            <div class="mini-card"><strong>Onda espacial / linha de visada</strong>Ligação direta e por reflexões locais, comum em VHF/UHF.</div>
            <div class="mini-card"><strong>Ionosférica</strong>Camadas ionizadas refratam ondas HF e possibilitam enlaces além do horizonte, sujeitos à hora, estação, ciclo solar e frequência.</div>
            <div class="mini-card"><strong>Troposférica</strong>A troposfera pode causar refração e propagação anômala, inclusive dutos em certas condições.</div>
          </div>
        `
      },
      {
        title: "HF, VHF e UHF na prática",
        html: `
          <p><strong>HF</strong> é frequentemente escolhida para distâncias longas sem repetidora, quando as condições ionosféricas são favoráveis. <strong>VHF/UHF</strong> normalmente dependem muito da altura das antenas, da topografia, dos edifícios e das repetidoras.</p>
          <p>Dobrar a potência não significa dobrar a distância. Em cidades, um prédio pode bloquear o enlace mesmo com um rádio de maior potência.</p>
          <div class="callout exam"><p><strong>Regra prática:</strong> em VHF/UHF, subir a antena e melhorar a visada costuma render mais que trocar 5 W por 10 W.</p></div>
        `
      },
      {
        title: "Interferências comuns",
        html: `
          <div class="mini-grid">
            <div class="mini-card"><strong>Co-canal</strong>Sinais diferentes competem na mesma frequência.</div>
            <div class="mini-card"><strong>Canal adjacente</strong>Emissão ou recepção sem seletividade adequada invade a frequência vizinha.</div>
            <div class="mini-card"><strong>Intermodulação</strong>Mistura não linear gera sinais indesejados.</div>
            <div class="mini-card"><strong>Harmônicos / espúrios</strong>Emissões fora da frequência principal.</div>
            <div class="mini-card"><strong>Ruído eletromagnético</strong>Fontes chaveadas, motores, telas, LEDs e equipamentos defeituosos.</div>
          </div>
        `
      },
      {
        title: "Procedimento diante de interferência",
        html: `
          <ol>
            <li>Ouça e identifique o padrão da interferência.</li>
            <li>Confira frequência, tom e modo.</li>
            <li>Teste antena e cabo; revise conectores.</li>
            <li>Reduza potência e melhore filtros quando possível.</li>
            <li>Registre o caso e informe a comunidade ou a autoridade competente se necessário.</li>
          </ol>
          <p><strong>Nunca transmita deliberadamente para bloquear outra estação.</strong> Interferência se resolve com diagnóstico e cooperação, não com retaliação no ar.</p>
        `
      }
    ],
    traps: [
      {
        myth: "Dobrar a potência garante o dobro da distância.",
        truth: "Não. Potência não se converte linearmente em alcance; visada, antena e ambiente importam."
      },
      {
        myth: "HF sempre alcança longe, em qualquer condição.",
        truth: "A propagação ionosférica varia com hora, estação, ciclo solar e frequência."
      },
      {
        myth: "Um prédio bloqueia VHF/UHF, mas potência maior resolve qualquer bloqueio.",
        truth: "Obstáculos físicos continuam importando; altura e visada são decisivas."
      }
    ],
    flashcards: [
      {
        front: "Qual propagação permite enlaces HF além do horizonte?",
        back: "A propagação ionosférica, quando as condições são favoráveis."
      },
      {
        front: "O que é interferência co-canal?",
        back: "Sinais diferentes competindo na mesma frequência."
      },
      {
        front: "O que caracteriza a linha de visada?",
        back: "Ligação direta e por reflexões locais, comum em VHF/UHF."
      }
    ],
    quiz: [
      {
        statement: "Em VHF e UHF, a altura das antenas e os obstáculos urbanos podem ser decisivos para a qualidade do enlace.",
        answer: true,
        explanation: "Nessas faixas, a linha de visada e o ambiente urbano têm grande impacto."
      },
      {
        statement: "Aumentar a potência de 5 W para 10 W garante, em qualquer ambiente, o dobro da distância de comunicação.",
        answer: false,
        explanation: "Potência maior não garante distância proporcional; antena, altura e obstáculos importam."
      }
    ],
    sourceIds: [1]
  },
  {
    id: "aula-6",
    number: 6,
    part: "Técnica e ética",
    title: "Comunicação, Código Q, ética e emergência",
    short: "Chamada disciplinada, alfabeto fonético, repetidoras e tráfego de socorro.",
    duration: "18 min",
    objectives: [
      "Executar a sequência correta de chamada e identificação.",
      "Interpretar os códigos Q mais usados.",
      "Aplicar as regras de ética e de uso de repetidoras.",
      "Organizar uma transmissão de emergência objetiva."
    ],
    sections: [
      {
        title: "Sequência disciplinada de chamada",
        html: `
          <ol>
            <li>Escute a frequência; confirme que não há tráfego em andamento ou prioritário.</li>
            <li>Identifique a estação chamada e a sua com indicativos <strong>reais e licenciados</strong>.</li>
            <li>Faça chamada curta; <strong>não mais que três repetições consecutivas</strong> antes de voltar à escuta.</li>
            <li>Ao receber resposta, confirme os indicativos, informe o sinal e troque o conteúdo de modo objetivo.</li>
            <li>Respeite as pausas, o limite de transmissão e o encerramento identificado.</li>
          </ol>
          <div class="callout neutral"><p><strong>Exemplo fictício de estrutura</strong> — não são indicativos para uso: “Estação [INDICATIVO B], aqui [INDICATIVO A]. Escuta?” — “Aqui [INDICATIVO B], recebendo.”</p></div>
        `
      },
      {
        title: "Código Q — usos frequentes",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Código</th><th>Significado operacional básico</th></tr></thead>
              <tbody>
                <tr><td><strong>QRA</strong></td><td>Nome da estação.</td></tr>
                <tr><td><strong>QRG</strong></td><td>Frequência exata.</td></tr>
                <tr><td><strong>QRL</strong></td><td>Ocupado? / Estou ocupado.</td></tr>
                <tr><td><strong>QRM</strong></td><td>Interferência de outras estações.</td></tr>
                <tr><td><strong>QRN</strong></td><td>Perturbação atmosférica ou estática.</td></tr>
                <tr><td><strong>QRP</strong></td><td>Reduzir potência.</td></tr>
                <tr><td><strong>QRO</strong></td><td>Aumentar potência.</td></tr>
                <tr><td><strong>QRS</strong></td><td>Transmitir mais devagar.</td></tr>
                <tr><td><strong>QRT</strong></td><td>Cessar transmissão.</td></tr>
                <tr><td><strong>QRV</strong></td><td>Pronto para operar.</td></tr>
                <tr><td><strong>QRX</strong></td><td>Aguardar / chamarei novamente.</td></tr>
                <tr><td><strong>QRZ</strong></td><td>Quem me chama?</td></tr>
                <tr><td><strong>QSB</strong></td><td>Variação de intensidade de sinal (fading).</td></tr>
                <tr><td><strong>QSL</strong></td><td>Confirmação de recepção.</td></tr>
                <tr><td><strong>QSO</strong></td><td>Comunicação entre estações.</td></tr>
                <tr><td><strong>QTH</strong></td><td>Localização da estação.</td></tr>
              </tbody>
            </table>
          </div>
          <p>O Ato 3448/2026 permite o emprego do Código Q <strong>das séries QRA a QUZ</strong>, além do alfabeto fonético da UIT. A tabela acima é uma seleção resumida; consulte referência operacional se houver dúvida.</p>
        `
      },
      {
        title: "Alfabeto fonético internacional",
        html: `
          <div class="alphabet-grid">
            <span><b>A</b> Alfa</span><span><b>B</b> Bravo</span><span><b>C</b> Charlie</span><span><b>D</b> Delta</span>
            <span><b>E</b> Echo</span><span><b>F</b> Foxtrot</span><span><b>G</b> Golf</span><span><b>H</b> Hotel</span>
            <span><b>I</b> India</span><span><b>J</b> Juliett</span><span><b>K</b> Kilo</span><span><b>L</b> Lima</span>
            <span><b>M</b> Mike</span><span><b>N</b> November</span><span><b>O</b> Oscar</span><span><b>P</b> Papa</span>
            <span><b>Q</b> Quebec</span><span><b>R</b> Romeo</span><span><b>S</b> Sierra</span><span><b>T</b> Tango</span>
            <span><b>U</b> Uniform</span><span><b>V</b> Victor</span><span><b>W</b> Whiskey</span><span><b>X</b> X-ray</span>
            <span><b>Y</b> Yankee</span><span><b>Z</b> Zulu</span>
          </div>
          <p>Para números, enuncie de forma inteligível. Soletrar um indicativo corretamente reduz erros em ruído; não invente abreviações ambíguas.</p>
        `
      },
      {
        title: "Ética operacional",
        html: `
          <ul>
            <li>Escute antes de chamar e seja cortês.</li>
            <li>Não monopolize a frequência.</li>
            <li>Evite informações pessoais desnecessárias e linguagem ofensiva.</li>
            <li>Não faça brincadeiras que possam parecer socorro real.</li>
            <li>Não transmita música, publicidade ou serviço comercial.</li>
            <li>Use potência compatível com a qualidade necessária.</li>
            <li>Respeite operadores iniciantes e comunicações prioritárias.</li>
          </ul>
        `
      },
      {
        title: "Repetidoras: regras numéricas",
        html: `
          <ul>
            <li>A repetidora deve transmitir automaticamente sua identificação em intervalos de <strong>até uma hora</strong> e permitir controle ou desligamento remoto.</li>
            <li>A transmissão automática após o fim do sinal recebido — a cauda — deve durar <strong>no máximo cinco segundos</strong>.</li>
            <li>O uso continuado não deve exceder <strong>dez minutos</strong>, com desligamento automático e temporização reiniciada nas pausas.</li>
            <li>Repetidoras, inclusive espaciais, devem ser abertas aos radioamadores, observadas as classes; não podem ter acesso codificado para restringir comunicação, com exceção regulamentar para determinados sinais de telecomando espacial.</li>
          </ul>
          <div class="callout"><p><strong>Importante:</strong> acessar uma repetidora não dá direito de interromper um QSO em andamento. Aguarde o momento apropriado e os procedimentos da rede.</p></div>
        `
      },
      {
        title: "Como operar em emergência",
        html: `
          <ol>
            <li>Escute e identifique se há tráfego de socorro.</li>
            <li>Se estiver em condições e autorizado a transmitir, identifique sua estação.</li>
            <li>Informe <strong>local, natureza da emergência, risco imediato e auxílio solicitado</strong>.</li>
            <li>Evite boatos e mensagens longas; anote hora, origem e destino da informação.</li>
            <li>Não ocupe o canal desnecessariamente; retransmita apenas informações confirmadas.</li>
            <li>Dê prioridade à comunicação de socorro e siga orientações da coordenação legítima da rede.</li>
          </ol>
          <div class="callout exam"><p><strong>Exemplo didático:</strong> “Emergência real em [local]. Há [situação], [quantidade de pessoas], necessidade de [recurso]. Estação [indicativo], aguardando instruções.”</p></div>
          <p>Emergência não transforma todas as frequências em faixas livres. Transmita dentro do serviço e das regras aplicáveis, com informações objetivas e prioridade para o socorro real.</p>
        `
      }
    ],
    traps: [
      {
        myth: "QRM é estática atmosférica e QRN é interferência de outras estações.",
        truth: "É o contrário: QRM é interferência de estações; QRN é perturbação atmosférica/estática."
      },
      {
        myth: "Acessar a repetidora dá direito de interromper qualquer QSO.",
        truth: "Aguarde o momento apropriado e respeite os procedimentos da rede."
      },
      {
        myth: "Em emergência, qualquer frequência pode ser usada livremente.",
        truth: "A emergência tem prioridade, mas a operação continua dentro do serviço e das regras aplicáveis."
      }
    ],
    flashcards: [
      {
        front: "O que significa QTH?",
        back: "Localização da estação."
      },
      {
        front: "O que significa QSL?",
        back: "Confirmação de recepção."
      },
      {
        front: "Qual é o limite da cauda de uma repetidora?",
        back: "No máximo cinco segundos após o fim do sinal recebido."
      }
    ],
    quiz: [
      {
        statement: "QRM refere-se à interferência de outras estações, enquanto QRN é associado a perturbações atmosféricas ou estática.",
        answer: true,
        explanation: "Essa é a distinção clássica entre os dois códigos Q."
      },
      {
        statement: "Segundo o Ato 3448/2026, uma repetidora deve transmitir automaticamente seu indicativo em intervalos não superiores a uma hora.",
        answer: true,
        explanation: "A identificação automática deve ocorrer em intervalos de até uma hora."
      }
    ],
    sourceIds: [1, 2]
  },
  {
    id: "aula-7",
    number: 7,
    part: "Revisão",
    title: "Revisão de véspera e plano de 7 dias",
    short: "Os números mais cobrados, o cronograma final e o checklist do dia da prova.",
    duration: "12 min",
    objectives: [
      "Revisar os números que mais aparecem em questões.",
      "Seguir um plano de sete dias até a prova.",
      "Usar os erros do simulado para priorizar a revisão.",
      "Chegar ao dia da prova com um checklist objetivo."
    ],
    sections: [
      {
        title: "Números mais cobrados",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Item</th><th>Regra</th></tr></thead>
              <tbody>
                <tr><td>Classe C — por matéria</td><td><strong>15 questões</strong>, <strong>8 acertos mínimos</strong>, <strong>20 minutos</strong>.</td></tr>
                <tr><td>Chamada</td><td>No máximo <strong>3 repetições consecutivas</strong> antes de escutar.</td></tr>
                <tr><td>Transmissão entre estações</td><td>Máximo de <strong>10 minutos</strong>, exceto emergência.</td></tr>
                <tr><td>Repetidora — identificação</td><td>Em intervalos de <strong>até 1 hora</strong>.</td></tr>
                <tr><td>Repetidora — cauda</td><td><strong>Até 5 segundos</strong>.</td></tr>
                <tr><td>Repetidora — uso continuado</td><td><strong>10 minutos</strong>, com desligamento automático.</td></tr>
                <tr><td>Crédito de aprovação</td><td><strong>12 meses</strong>.</td></tr>
                <tr><td>Nova prova após reprovação</td><td>Carência mínima de <strong>8 dias</strong>.</td></tr>
                <tr><td>Revisão de prova</td><td>Até <strong>60 dias</strong>.</td></tr>
                <tr><td>Falta injustificada</td><td><strong>30 dias</strong> sem nova inscrição.</td></tr>
                <tr><td>Isenção CFN-CN</td><td><strong>Eletrônica e Eletricidade</strong>, mediante comprovação e deferimento.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Plano de 7 dias",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th class="num">Dia</th><th>Tópico</th><th>Trabalho proposto</th></tr></thead>
              <tbody>
                <tr><td class="num">1</td><td>Finalidade, Anatel, UIT, IARU, normas</td><td>Ler as aulas 2 e 3; explicar as três autorizações em voz alta.</td></tr>
                <tr><td class="num">2</td><td>Indicativos, licenças, isenção, limites</td><td>Reler as aulas 1 a 3; criar 10 perguntas próprias.</td></tr>
                <tr><td class="num">3</td><td>Equipamentos, simplex/duplex, frequências</td><td>Ler a aula 4; desenhar os blocos de receptor e transmissor.</td></tr>
                <tr><td class="num">4</td><td>Antenas, ROE, SNR, propagação</td><td>Ler as aulas 5 e 6; explicar exemplos de VHF e HF.</td></tr>
                <tr><td class="num">5</td><td>Chamada, Código Q, alfabeto</td><td>Ler a aula 7; praticar soletração e códigos Q.</td></tr>
                <tr><td class="num">6</td><td>Ética, repetidoras, emergência</td><td>Reler a aula 7; revisar as regras numéricas.</td></tr>
                <tr><td class="num">7</td><td>Simulado e revisão de erros</td><td>Resolver os 30 itens em 2 blocos de 20 min; corrigir.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Diagnóstico pelos erros",
        html: `
          <ul>
            <li>Errou questões <strong>2, 7, 8, 9, 11, 12, 13 ou 14</strong>? Revise os itens 4, 5 e 10 do Ato 3448/2026 e a aula 3.</li>
            <li>Errou questões <strong>18 a 24</strong>? Revise antenas, propagação e interferências nas aulas 4 a 6.</li>
            <li>Errou questões <strong>25 a 29</strong>? Revise Código Q, ética, CTCSS e repetidoras nas aulas 4 e 7.</li>
            <li>Errou questões de prazos ou formato? Volte à aula 1 e à tabela de números.</li>
          </ul>
        `
      },
      {
        title: "Checklist de véspera",
        html: `
          <ul>
            <li>Confirmar horário, local e documento exigido para a prova.</li>
            <li>Revisar apenas a tabela de números e as pegadinhas; evitar conteúdo novo.</li>
            <li>Fazer um bloco de 15 questões cronometrado em 20 minutos.</li>
            <li>Dormir bem; cansaço atrapalha mais que falta de uma regra isolada.</li>
            <li>No dia, ler cada frase inteira e desconfiar de absolutos.</li>
            <li>Não deixar item em branco: no formato C/E, branco é erro garantido.</li>
          </ul>
          <div class="callout exam"><p><strong>Mentalidade de prova:</strong> o objetivo é 8/15 em cada matéria. Se uma questão travar, marque a melhor leitura, siga adiante e volte no fim.</p></div>
        `
      }
    ],
    traps: [
      {
        myth: "Crédito de aprovação vale 6 meses.",
        truth: "Vale 12 meses."
      },
      {
        myth: "Depois de reprovar, basta esperar 30 dias para tentar de novo.",
        truth: "A carência mínima é de 8 dias; 30 dias é o caso de falta injustificada."
      },
      {
        myth: "Revisão de prova e falta injustificada têm o mesmo prazo.",
        truth: "Revisão: até 60 dias. Falta injustificada: 30 dias sem nova inscrição."
      }
    ],
    flashcards: [
      {
        front: "Quais são os três números-base da Classe C?",
        back: "15 questões, 8 acertos mínimos e 20 minutos por matéria."
      },
      {
        front: "Quais são os limites de chamada e de transmissão?",
        back: "No máximo 3 chamadas consecutivas e 10 minutos por transmissão, exceto emergência."
      },
      {
        front: "Quais são os três números da repetidora?",
        back: "Identificação em até 1 hora, cauda de até 5 segundos e uso continuado de 10 minutos."
      }
    ],
    quiz: [
      {
        statement: "Os créditos de aprovação por matéria têm validade de 12 meses.",
        answer: true,
        explanation: "É o prazo previsto no Ato 3448/2026 para aproveitamento de matérias aprovadas."
      },
      {
        statement: "A carência mínima para nova tentativa após reprovação é de 30 dias.",
        answer: false,
        explanation: "A carência é de 8 dias. Os 30 dias se referem à falta injustificada."
      },
      {
        statement: "A falta injustificada impede nova inscrição por 30 dias.",
        answer: true,
        explanation: "Esse é o prazo de impedimento previsto para falta injustificada."
      }
    ],
    sourceIds: [1, 2, 8]
  }
];

/* ============================================================
   Simulado — 30 itens extraídos do guia, com gabarito comentado
   ============================================================ */

const EXAM = [
  { n: 1, block: "A", statement: "O Serviço de Radioamador é destinado ao treinamento próprio, à intercomunicação e a investigações técnicas, sem finalidade comercial.", answer: "C", explanation: "A finalidade é pessoal e técnica, sem exploração comercial.", lesson: "aula-1" },
  { n: 2, block: "A", statement: "O COER Classe C autoriza automaticamente seu titular a transmitir com qualquer estação e em qualquer frequência que o rádio consiga selecionar.", answer: "E", explanation: "O COER não substitui as condições técnicas e o licenciamento da estação.", lesson: "aula-2" },
  { n: 3, block: "A", statement: "A Anatel é o órgão responsável pela regulamentação e fiscalização do serviço de radioamador no Brasil.", answer: "C", explanation: "A Anatel regula, habilita e fiscaliza o serviço.", lesson: "aula-1" },
  { n: 4, block: "A", statement: "Um plano de bandas da IARU revoga, por si só, os limites de frequência e potência fixados pela regulamentação brasileira.", answer: "E", explanation: "O plano da IARU não se sobrepõe à norma brasileira.", lesson: "aula-1" },
  { n: 5, block: "A", statement: "O Serviço de Radioamador pode ser explorado comercialmente, desde que a estação esteja devidamente licenciada.", answer: "E", explanation: "A finalidade do serviço é pessoal e técnica, sem exploração comercial.", lesson: "aula-1" },
  { n: 6, block: "A", statement: "A LABRE é a entidade que emite o COER no lugar da Anatel.", answer: "E", explanation: "A LABRE orienta e representa os radioamadores; a habilitação é competência da Anatel.", lesson: "aula-1" },
  { n: 7, block: "A", statement: "Ter um transceptor homologado elimina a necessidade de habilitação de operador e de regularização da estação.", answer: "E", explanation: "Homologação, habilitação e licenciamento não são equivalentes.", lesson: "aula-3" },
  { n: 8, block: "A", statement: "O indicativo de chamada deve identificar a estação no início, durante e no término dos comunicados.", answer: "C", explanation: "A identificação ocorre no início, durante e no término.", lesson: "aula-2" },
  { n: 9, block: "A", statement: "O Ato nº 3448/2026 permite que qualquer terceiro sem COER opere de maneira autônoma, sem supervisão, desde que o rádio pertença a um radioamador.", answer: "E", explanation: "O terceiro sem COER deve estar sob supervisão do responsável habilitado.", lesson: "aula-2" },
  { n: 10, block: "A", statement: "Antes de transmitir, o operador deve verificar se o canal está livre.", answer: "C", explanation: "Escutar e verificar o canal livre é requisito operacional.", lesson: "aula-2" },
  { n: 11, block: "A", statement: "Na operação habitual, a chamada pode ser repetida indefinidamente sem passar à escuta.", answer: "E", explanation: "São permitidas no máximo três chamadas consecutivas antes da escuta.", lesson: "aula-2" },
  { n: 12, block: "A", statement: "A autorização de uso de radiofrequências do serviço tem prazo de vigência de 20 anos segundo o Ato nº 3448/2026.", answer: "C", explanation: "Prazo previsto no item 5.2 do Ato 3448/2026.", lesson: "aula-2" },
  { n: 13, block: "A", statement: "A proibição de operar estação sem identificação também aparece entre os requisitos operacionais do Ato nº 3448/2026.", answer: "C", explanation: "O item 10.2 proíbe a operação sem identificação.", lesson: "aula-2" },
  { n: 14, block: "A", statement: "A comunicação internacional de mensagens de terceiros é irrestrita, mesmo quando não há emergência, desastre ou acordo específico.", answer: "E", explanation: "Existem restrições e exceções específicas para mensagem internacional de terceiros.", lesson: "aula-2" },
  { n: 15, block: "A", statement: "Manter os dados da estação atualizados é responsabilidade do autorizado.", answer: "C", explanation: "A regularidade da estação inclui manter seus dados atualizados perante a administração.", lesson: "aula-2" },

  { n: 16, block: "B", statement: "Um transceptor reúne funções de transmissão e recepção de sinais de rádio.", answer: "C", explanation: "Transceptor reúne receptor e transmissor.", lesson: "aula-3" },
  { n: 17, block: "B", statement: "Numa comunicação simplex típica, duas estações podem revezar a transmissão e a recepção na mesma frequência.", answer: "C", explanation: "O simplex típico alterna os turnos numa frequência comum.", lesson: "aula-3" },
  { n: 18, block: "B", statement: "Uma antena Yagi-Uda é geralmente direcional, sendo útil quando se pretende concentrar a irradiação em certa direção.", answer: "C", explanation: "A Yagi é uma antena direcional.", lesson: "aula-4" },
  { n: 19, block: "B", statement: "A carga artificial (dummy load) é usada em ensaios de transmissão para substituir a antena e limitar irradiação, se dimensionada corretamente.", answer: "C", explanation: "Uma dummy load bem dimensionada permite testes sem antena irradiante.", lesson: "aula-4" },
  { n: 20, block: "B", statement: "Relação de ondas estacionárias elevada é sempre sinal de ótimo casamento de impedâncias entre linha e antena.", answer: "E", explanation: "ROE alta sugere desadaptação e reflexões maiores.", lesson: "aula-4" },
  { n: 21, block: "B", statement: "A uma frequência de 150 MHz corresponde comprimento de onda aproximado de 2 metros, no espaço livre.", answer: "C", explanation: "λ ≈ 300 / 150 = 2 m.", lesson: "aula-3" },
  { n: 22, block: "B", statement: "Em VHF e UHF, a altura das antenas e os obstáculos urbanos podem ser decisivos para a qualidade do enlace.", answer: "C", explanation: "VHF/UHF frequentemente dependem de visada e de obstáculos.", lesson: "aula-5" },
  { n: 23, block: "B", statement: "Aumentar a potência de transmissão de 5 W para 10 W garante, em qualquer ambiente, o dobro da distância de comunicação.", answer: "E", explanation: "Dobrar a potência não garante dobrar o alcance.", lesson: "aula-5" },
  { n: 24, block: "B", statement: "QRM refere-se à interferência de outras estações, enquanto QRN é associado a perturbações atmosféricas ou estática.", answer: "C", explanation: "QRM é interferência de estações; QRN é estática ou perturbação natural.", lesson: "aula-6" },
  { n: 25, block: "B", statement: "QTH é comumente utilizado para informar a localização da estação.", answer: "C", explanation: "QTH refere-se à localização.", lesson: "aula-6" },
  { n: 26, block: "B", statement: "O alfabeto fonético da UIT emprega palavras como Alfa, Bravo, Charlie e Delta.", answer: "C", explanation: "São termos padronizados pelo alfabeto fonético.", lesson: "aula-6" },
  { n: 27, block: "B", statement: "O operador deve interromper qualquer comunicado de emergência para realizar um teste rotineiro de alcance.", answer: "E", explanation: "Tráfego de socorro tem prioridade.", lesson: "aula-6" },
  { n: 28, block: "B", statement: "O CTCSS funciona como um método de criptografia que impede terceiros de escutar uma comunicação analógica FM.", answer: "E", explanation: "O tom CTCSS filtra a abertura de squelch; não criptografa o áudio.", lesson: "aula-3" },
  { n: 29, block: "B", statement: "Segundo o Ato nº 3448/2026, uma repetidora deve ser capaz de transmitir automaticamente seu indicativo de chamada em intervalos não superiores a uma hora.", answer: "C", explanation: "Identificação automática em intervalos de até uma hora.", lesson: "aula-6" },
  { n: 30, block: "B", statement: "A relação sinal/ruído pode melhorar quando se reduz o ruído captado ou se otimiza a recepção do sinal desejado.", answer: "C", explanation: "Melhorar a relação sinal/ruído favorece a inteligibilidade e a recepção.", lesson: "aula-4" }
];

const SOURCES = [
  {
    id: 1,
    kicker: "Oficial",
    title: "Anatel — Ato nº 3448/2026",
    note: "Texto e ementa oficiais: operação, indicativos, qualificação, formato das provas e isenções.",
    url: "https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2148-ato-3448-26"
  },
  {
    id: 2,
    kicker: "Oficial",
    title: "Cartilha do Serviço Radioamador — Anatel (2026)",
    note: "Material de apoio publicado em março de 2026.",
    url: "https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-simplifica-regras-e-fortalece-o-radioamadorismo-no-brasil/cartilha_radioamador.pdf"
  },
  {
    id: 3,
    kicker: "Oficial",
    title: "Anatel — Habilitação do Radioamador",
    note: "Orientação sobre habilitação e agendamento.",
    url: "https://www.gov.br/anatel/pt-br/regulado/outorga/radioamador-e-radio-cidadao/habilitacao-do-radioamador"
  },
  {
    id: 4,
    kicker: "Oficial",
    title: "Ato Anatel nº 926/2024 — requisitos técnicos",
    note: "Requisitos técnicos citados no item 2.11 do Ato 3448/2026; abra a página oficial e localize a versão vigente.",
    url: "https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2148-ato-3448-26"
  },
  {
    id: 5,
    kicker: "Oficial",
    title: "Lei nº 9.472/1997 — Lei Geral de Telecomunicações",
    note: "Organização e fiscalização das telecomunicações no Brasil.",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9472.htm"
  },
  {
    id: 6,
    kicker: "Histórico",
    title: "LABRE — Cursos e apostilas",
    note: "Materiais históricos de 20/12/2008; úteis para temas tradicionais, não para a regra vigente.",
    url: "https://www.labre.org.br/cursos-e-apostilas/"
  },
  {
    id: 7,
    kicker: "Histórico",
    title: "URPE — Como se tornar radioamador",
    note: "Provas e apostilas antigas de 2008; não servem como fonte da regra de 2026.",
    url: "https://urpe.org.br/como-se-tornar-radioamador/"
  },
  {
    id: 8,
    kicker: "Simulador",
    title: "LABRE-DF — Simulador online",
    note: "Simulador complementar para praticar.",
    url: "https://labredf.org.br/simulador/"
  }
];

/* ============================================================
   Estado, persistência e utilitários
   ============================================================ */

const STORAGE_KEY = "coer-classe-c-2026-v2";
const BLOCK_TIME = 20 * 60;

function createExamBlock() {
  return {
    answers: {},
    submitted: false,
    started: false,
    running: false,
    remaining: BLOCK_TIME,
    autoSubmitted: false
  };
}

function createDefaultState() {
  return {
    completed: [],
    quiz: {},
    exam: {
      A: createExamBlock(),
      B: createExamBlock()
    },
    lastView: "inicio"
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    const parsed = JSON.parse(raw);
    const next = createDefaultState();

    if (Array.isArray(parsed.completed)) {
      next.completed = parsed.completed.filter(function (id) {
        return LESSONS.some(function (lesson) { return lesson.id === id; });
      });
    }

    if (parsed.quiz && typeof parsed.quiz === "object") {
      next.quiz = parsed.quiz;
    }

    if (parsed.exam) {
      ["A", "B"].forEach(function (block) {
        if (parsed.exam[block]) {
          next.exam[block] = Object.assign({}, next.exam[block], parsed.exam[block], {
            running: false
          });
        }
      });
    }

    if (parsed.lastView) next.lastView = parsed.lastView;
    return next;
  } catch (error) {
    return createDefaultState();
  }
}

let state = loadState();
let timerHandle = null;
let timerBlock = null;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    /* O curso continua funcionando mesmo sem persistência. */
  }
}

function $(selector, root) {
  return (root || document).querySelector(selector);
}

function $$(selector, root) {
  return Array.prototype.slice.call((root || document).querySelectorAll(selector));
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function lessonById(id) {
  return LESSONS.find(function (lesson) { return lesson.id === id; });
}

function lessonTitle(id) {
  const lesson = lessonById(id);
  return lesson ? "Aula " + lesson.number + " — " + lesson.title : "Aula";
}

function currentView() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  if (!raw) return "inicio";
  if (raw === "inicio" || raw === "simulado" || raw === "fontes") return raw;
  if (/^aula-[1-7]$/.test(raw) && lessonById(raw)) return raw;
  if (/^simulado-[AB]$/.test(raw)) return raw;
  return "inicio";
}

function go(view) {
  closeMenu();
  if (currentView() === view) {
    render();
  } else {
    location.hash = view;
  }
}

/* ============================================================
   Navegação e progresso
   ============================================================ */

function renderSidebar(active) {
  const nav = $("#side-nav");
  if (!nav) return;

  const doneCount = state.completed.length;
  let html = "";

  html += '<p class="nav-label">Curso</p>';
  html += '<button class="nav-item ' + (active === "inicio" ? "active" : "") + '" type="button" data-view="inicio" ' + (active === "inicio" ? 'aria-current="page"' : "") + '>';
  html += '<span class="nav-num">00</span><span class="nav-copy"><span class="nav-title">Visão geral</span><span class="nav-part">Início</span></span>';
  html += '</button>';

  html += '<p class="nav-label">Aulas</p>';
  LESSONS.forEach(function (lesson) {
    const isActive = active === lesson.id;
    const isDone = state.completed.indexOf(lesson.id) !== -1;
    html += '<button class="nav-item ' + (isActive ? "active" : "") + '" type="button" data-view="' + lesson.id + '" ' + (isActive ? 'aria-current="page"' : "") + '>';
    html += '<span class="nav-num">' + pad2(lesson.number) + '</span>';
    html += '<span class="nav-copy"><span class="nav-title">' + lesson.title + (isDone ? '<span class="nav-check" aria-hidden="true">✓</span>' : "") + '</span><span class="nav-part">' + lesson.part + '</span></span>';
    html += '</button>';
  });

  html += '<p class="nav-label">Avaliação</p>';
  const examActive = active === "simulado" || active.indexOf("simulado-") === 0;
  html += '<button class="nav-item ' + (examActive ? "active" : "") + '" type="button" data-view="simulado" ' + (examActive ? 'aria-current="page"' : "") + '>';
  html += '<span class="nav-num">30</span><span class="nav-copy"><span class="nav-title">Simulado comentado</span><span class="nav-part">2 blocos · 30 itens</span></span>';
  html += '</button>';
  html += '<button class="nav-item ' + (active === "fontes" ? "active" : "") + '" type="button" data-view="fontes" ' + (active === "fontes" ? 'aria-current="page"' : "") + '>';
  html += '<span class="nav-num">§</span><span class="nav-copy"><span class="nav-title">Fontes oficiais</span><span class="nav-part">Referências</span></span>';
  html += '</button>';

  nav.innerHTML = html;

  const progress = $("#sidebar-progress");
  if (progress) {
    const pct = Math.round((doneCount / LESSONS.length) * 100);
    progress.innerHTML =
      '<div class="progress-label"><span>Progresso</span><strong>' + doneCount + '/' + LESSONS.length + '</strong></div>' +
      '<span class="progress-track"><i style="width:' + pct + '%"></i></span>';
  }
}

function updateProgressUI() {
  const doneCount = state.completed.length;
  const pct = Math.round((doneCount / LESSONS.length) * 100);
  const topProgress = $("#top-progress");
  const topLabel = $("#top-progress-label");
  const mobileProgress = $("#mobile-progress");

  if (topProgress) topProgress.style.width = pct + "%";
  if (topLabel) topLabel.textContent = doneCount + "/" + LESSONS.length + " aulas";
  if (mobileProgress) mobileProgress.textContent = doneCount + "/" + LESSONS.length;
}

/* ============================================================
   Fontes
   ============================================================ */

function renderSourceCards(ids) {
  const cards = ids.map(function (id) {
    const source = SOURCES.find(function (item) { return item.id === id; });
    if (!source) return "";
    const inner =
      '<span class="source-kicker">' + source.kicker + '</span>' +
      '<strong>' + source.title + '</strong>' +
      '<span>' + source.note + '</span>';
    if (source.url) {
      return '<a class="source-card" href="' + source.url + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>';
    }
    return '<div class="source-card is-static">' + inner + '</div>';
  }).join("");

  return '<div class="source-list">' + cards + '</div>';
}

function renderSourcesPage() {
  return (
    '<section class="sources-page">' +
      '<p class="eyebrow">Referências</p>' +
      '<h1>Fontes oficiais e materiais de apoio</h1>' +
      '<p>O conteúdo do curso foi organizado a partir do guia de estudos de 15/11/2026. As normas mudam; confirme sempre a versão vigente antes de agendar a prova ou operar uma estação.</p>' +
      renderSourceCards(SOURCES.map(function (source) { return source.id; })) +
      '<p class="disclaimer"><strong>Material didático independente.</strong> Este site não é banco oficial de questões nem reprodução de prova da Anatel. As questões do simulado foram criadas para este material, com base na ementa e no formato do Ato 3448/2026. Em caso de divergência, prevalecem as normas oficiais.</p>' +
    '</section>'
  );
}

/* ============================================================
   Visão geral
   ============================================================ */

function renderLessonCard(lesson) {
  const isDone = state.completed.indexOf(lesson.id) !== -1;
  return (
    '<article class="lesson-card ' + (isDone ? "is-complete" : "") + '">' +
      '<div class="lesson-card-top">' +
        '<span class="lesson-no">AULA ' + pad2(lesson.number) + '</span>' +
        '<span class="pill ' + (isDone ? "success" : "") + '">' + (isDone ? "Concluída" : lesson.part) + '</span>' +
      '</div>' +
      '<h3>' + lesson.title + '</h3>' +
      '<p>' + lesson.short + '</p>' +
      '<div class="lesson-card-foot">' +
        '<span class="lesson-meta">' + lesson.duration + ' · ' + lesson.flashcards.length + ' flashcards</span>' +
        '<button class="btn small ' + (isDone ? "is-done" : "") + '" type="button" data-view="' + lesson.id + '">' + (isDone ? "Revisar" : "Estudar") + ' →</button>' +
      '</div>' +
    '</article>'
  );
}

function renderOverview() {
  const doneCount = state.completed.length;
  const lessonsHtml = LESSONS.map(renderLessonCard).join("");
  const dialBars = Array.from({ length: 12 }, function () { return "<i></i>"; }).join("");

  return (
    '<section class="hero">' +
      '<div>' +
        '<p class="eyebrow">Guia de estudos · Atualizado em 15/11/2026</p>' +
        '<h1>COER <em>Classe C</em></h1>' +
        '<p class="hero-lead">Legislação, técnica e ética operacional em sete aulas curtas — com flashcards, quizzes e um simulado de 30 itens no formato Certo/Errado.</p>' +
        '<div class="hero-actions">' +
          '<button class="btn primary" type="button" data-view="aula-1">Começar pela aula 1</button>' +
          '<button class="btn" type="button" data-view="simulado">Ir ao simulado</button>' +
        '</div>' +
      '</div>' +
      '<aside class="hero-panel">' +
        '<div class="dial" aria-hidden="true">' + dialBars + '</div>' +
        '<p class="panel-label">Painel de prova · Classe C</p>' +
        '<dl class="panel-stats">' +
          '<div><dt>Itens</dt><dd>15</dd></div>' +
          '<div><dt>Mínimo</dt><dd>8</dd></div>' +
          '<div><dt>Tempo</dt><dd>20<span style="font-size:12px"> min</span></dd></div>' +
        '</dl>' +
        '<p class="panel-note">Metas por matéria. A aprovação em uma disciplina não compensa a reprovação em outra.</p>' +
      '</aside>' +
    '</section>' +
    '<section class="stats" aria-label="Resumo do curso">' +
      '<div class="stat"><strong>07</strong><span>aulas com objetivos, flashcards e cheque rápido</span></div>' +
      '<div class="stat"><strong>30</strong><span>questões inéditas em dois blocos comentados</span></div>' +
      '<div class="stat"><strong>' + pad2(doneCount) + '/07</strong><span>aulas concluídas no seu progresso local</span></div>' +
    '</section>' +
    '<section>' +
      '<div class="section-head">' +
        '<h2>Trilha de estudo</h2>' +
        '<p>Siga na ordem ou vá direto ao ponto fraco. Cada aula termina com um cheque de compreensão.</p>' +
      '</div>' +
      '<div class="lesson-grid">' + lessonsHtml + '</div>' +
    '</section>' +
    '<section class="exam-cta">' +
      '<div>' +
        '<p class="eyebrow">Simulado inédito</p>' +
        '<h2>30 itens. Dois blocos. Correção comentada.</h2>' +
        '<p>Bloco A: Legislação (1–15). Bloco B: Técnica e Ética (16–30). Cada bloco tem 20 minutos e meta de 8 acertos. O gabarito aparece só depois da correção.</p>' +
      '</div>' +
      '<div class="exam-cta-actions">' +
        '<button class="btn accent" type="button" data-view="simulado">Abrir simulado</button>' +
        '<button class="btn" type="button" data-view="fontes">Ver fontes oficiais</button>' +
      '</div>' +
    '</section>' +
    '<section>' +
      '<div class="section-head">' +
        '<h2>Fontes e referências</h2>' +
        '<p>Priorize os documentos oficiais. Materiais históricos ajudam a reconhecer temas, mas não substituem a regra vigente.</p>' +
      '</div>' +
      renderSourceCards([1, 2, 3, 5, 6, 8]) +
      '<p class="disclaimer"><strong>Material didático independente.</strong> Não é banco oficial de questões nem reprodução de prova da Anatel. As questões do simulado foram criadas para este material, com base na ementa e no formato do Ato 3448/2026. Em caso de divergência, prevalecem as normas oficiais.</p>' +
    '</section>'
  );
}

/* ============================================================
   Aulas
   ============================================================ */

function renderQuizItem(lesson, index, question) {
  const saved = state.quiz[lesson.id] && state.quiz[lesson.id][index];
  const correctChoice = question.answer ? "C" : "E";
  const answered = saved === "C" || saved === "E";
  const isCorrect = answered && saved === correctChoice;

  function choiceClass(choice) {
    if (!answered) return "";
    if (choice === correctChoice) return "is-correct";
    if (choice === saved) return "is-wrong";
    return "";
  }

  const feedback = answered
    ? '<div class="quiz-feedback" aria-live="polite"><strong class="' + (isCorrect ? "ok" : "no") + '">' + (isCorrect ? "Correto." : "Não exatamente.") + '</strong> ' +
      (isCorrect ? "" : "A resposta correta é <strong>" + (question.answer ? "Certo" : "Errado") + "</strong>. ") +
      question.explanation + '</div>'
    : '<div class="quiz-feedback" aria-live="polite" hidden></div>';

  return (
    '<div class="quiz-item">' +
      '<p class="quiz-statement"><span class="quiz-no">' + pad2(index + 1) + '</span><span>' + question.statement + '</span></p>' +
      '<div class="quiz-actions">' +
        '<button class="choice-btn ' + choiceClass("C") + '" type="button" data-action="quiz-answer" data-lesson="' + lesson.id + '" data-q="' + index + '" data-choice="C" ' + (answered ? "disabled" : "") + '>Certo</button>' +
        '<button class="choice-btn ' + choiceClass("E") + '" type="button" data-action="quiz-answer" data-lesson="' + lesson.id + '" data-q="' + index + '" data-choice="E" ' + (answered ? "disabled" : "") + '>Errado</button>' +
      '</div>' +
      feedback +
    '</div>'
  );
}

function renderFlashcard(card, index) {
  return (
    '<button class="flashcard" type="button" data-action="flip-card" aria-pressed="false" aria-label="Flashcard ' + (index + 1) + ': clique para virar">' +
      '<span class="flashcard-inner">' +
        '<span class="flashcard-face front">' +
          '<span class="fc-label">Pergunta</span>' +
          '<span class="fc-text">' + card.front + '</span>' +
          '<span class="fc-hint">Clique para revelar</span>' +
        '</span>' +
        '<span class="flashcard-face back">' +
          '<span class="fc-label">Resposta</span>' +
          '<span class="fc-text">' + card.back + '</span>' +
          '<span class="fc-hint">Clique para voltar</span>' +
        '</span>' +
      '</span>' +
    '</button>'
  );
}

function renderLesson(lesson) {
  const isDone = state.completed.indexOf(lesson.id) !== -1;
  const index = LESSONS.indexOf(lesson);
  const previous = index > 0 ? LESSONS[index - 1] : null;
  const next = index < LESSONS.length - 1 ? LESSONS[index + 1] : null;

  const sections = lesson.sections.map(function (section, sectionIndex) {
    return (
      '<section class="lesson-section">' +
        '<h2 data-step="' + pad2(sectionIndex + 1) + '">' + section.title + '</h2>' +
        section.html +
      '</section>'
    );
  }).join("");

  const traps = lesson.traps.map(function (trap) {
    return (
      '<div class="trap">' +
        '<div class="myth"><b>Pegadinha</b>' + trap.myth + '</div>' +
        '<div class="truth"><b>Correção</b>' + trap.truth + '</div>' +
      '</div>'
    );
  }).join("");

  const flashcards = lesson.flashcards.map(function (card, cardIndex) {
    return renderFlashcard(card, cardIndex);
  }).join("");

  const quiz = lesson.quiz.map(function (question, questionIndex) {
    return renderQuizItem(lesson, questionIndex, question);
  }).join("");

  const prevButton = previous
    ? '<button class="btn small" type="button" data-view="' + previous.id + '">← Aula ' + previous.number + '</button>'
    : '<button class="btn small" type="button" data-view="inicio">← Visão geral</button>';
  const nextButton = next
    ? '<button class="btn small" type="button" data-view="' + next.id + '">Aula ' + next.number + ' →</button>'
    : '<button class="btn small" type="button" data-view="simulado">Simulado →</button>';

  return (
    '<article class="lesson">' +
      '<header class="lesson-header">' +
        '<p class="eyebrow">Aula ' + pad2(lesson.number) + ' · ' + lesson.part + '</p>' +
        '<h1>' + lesson.title + '</h1>' +
        '<p class="lesson-lead">' + lesson.short + '</p>' +
        '<div class="meta-row">' +
          '<span class="meta-chip">' + lesson.duration + '</span>' +
          '<span class="meta-chip">' + lesson.objectives.length + ' objetivos</span>' +
          '<span class="meta-chip">' + lesson.flashcards.length + ' flashcards</span>' +
          '<span class="meta-chip">' + lesson.quiz.length + ' cheques</span>' +
        '</div>' +
      '</header>' +

      '<section class="objectives">' +
        '<p class="label">Objetivos da aula</p>' +
        '<ul>' + lesson.objectives.map(function (objective) { return '<li>' + objective + '</li>'; }).join("") + '</ul>' +
      '</section>' +

      sections +

      '<section class="traps">' +
        '<h2>Pegadinhas de prova</h2>' +
        '<p class="section-sub">Frases que parecem certas, mas trocam um conceito ou um número.</p>' +
        traps +
      '</section>' +

      '<section class="flashcards">' +
        '<h2>Flashcards</h2>' +
        '<p class="section-sub">Clique em cada cartão para virar e conferir a resposta.</p>' +
        '<div class="flashcard-grid">' + flashcards + '</div>' +
      '</section>' +

      '<section class="quiz">' +
        '<h2>Cheque rápido</h2>' +
        '<p class="section-sub">Responda para fixar. O feedback aparece na hora e fica salvo neste navegador.</p>' +
        quiz +
      '</section>' +

      '<section class="lesson-sources">' +
        '<h2>Fontes desta aula</h2>' +
        '<p class="section-sub">Consulte os documentos oficiais antes de tratar qualquer detalhe como definitivo.</p>' +
        renderSourceCards(lesson.sourceIds) +
      '</section>' +

      '<footer class="lesson-footer">' +
        '<button class="btn ' + (isDone ? "is-done" : "") + '" type="button" data-action="complete-lesson" data-lesson="' + lesson.id + '">' + (isDone ? "Aula concluída ✓" : "Marcar aula como concluída") + '</button>' +
        '<div class="lesson-nav">' + prevButton + nextButton + '</div>' +
      '</footer>' +
    '</article>'
  );
}

/* LESSON_VIEW_END */

/* ============================================================
   Simulado — visão geral, blocos, cronômetro e correção
   ============================================================ */

const EXAM_META = {
  A: {
    title: "Legislação de Telecomunicações",
    short: "Serviço, órgãos, COER, licença, indicativo, faixas, potência e regras operacionais."
  },
  B: {
    title: "Técnica e Ética Operacional",
    short: "Estações, antenas, propagação, Código Q, repetidoras e emergência."
  }
};

function examQuestions(block) {
  return EXAM.filter(function (question) { return question.block === block; });
}

function countAnswered(block) {
  const ex = state.exam[block];
  let total = 0;
  examQuestions(block).forEach(function (question) {
    if (ex.answers[question.n] === "C" || ex.answers[question.n] === "E") total += 1;
  });
  return total;
}

function examScore(block) {
  const ex = state.exam[block];
  let correct = 0;
  let answered = 0;
  examQuestions(block).forEach(function (question) {
    const chosen = ex.answers[question.n];
    if (chosen === "C" || chosen === "E") answered += 1;
    if (chosen === question.answer) correct += 1;
  });
  return { correct: correct, answered: answered, total: examQuestions(block).length };
}

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return pad2(minutes) + ":" + pad2(seconds);
}

function updateTimerUI(block) {
  const el = document.querySelector('[data-timer-block="' + block + '"]');
  if (!el) return;
  const ex = state.exam[block];
  el.textContent = formatTime(ex.remaining);
  el.classList.toggle("warning", ex.remaining <= 300 && ex.remaining > 60);
  el.classList.toggle("danger", ex.remaining <= 60);
}

function updateTimerButton(block) {
  const button = document.querySelector('[data-action="timer-toggle"][data-block="' + block + '"]');
  if (!button) return;
  const ex = state.exam[block];
  if (ex.submitted) {
    button.textContent = "Bloco corrigido";
    button.disabled = true;
    return;
  }
  button.disabled = false;
  button.textContent = ex.running ? "Pausar tempo" : (ex.started ? "Retomar tempo" : "Iniciar tempo");
}

function updateExamProgress(block) {
  const answered = countAnswered(block);
  const total = examQuestions(block).length;
  const label = document.querySelector('[data-exam-answered="' + block + '"]');
  const bar = document.querySelector('[data-exam-progress="' + block + '"]');
  if (label) label.textContent = answered + "/" + total + " respondidos";
  if (bar) bar.style.width = Math.round((answered / total) * 100) + "%";
}

function clearTimerHandle() {
  if (timerHandle) {
    clearInterval(timerHandle);
    timerHandle = null;
  }
  timerBlock = null;
}

function tickTimer(block) {
  const ex = state.exam[block];
  if (!ex || !ex.running) return;
  ex.remaining = Math.max(0, ex.remaining - 1);
  if (ex.remaining % 5 === 0) saveState();
  updateTimerUI(block);
  if (ex.remaining <= 0) {
    ex.running = false;
    clearTimerHandle();
    submitBlock(block, true);
  }
}

function startTimer(block) {
  const ex = state.exam[block];
  if (!ex || ex.submitted) return;

  if (timerHandle && timerBlock && timerBlock !== block) {
    pauseTimer(timerBlock, true);
  }

  ex.started = true;
  ex.running = true;
  if (ex.remaining <= 0) ex.remaining = BLOCK_TIME;
  saveState();

  clearTimerHandle();
  timerBlock = block;
  timerHandle = setInterval(function () { tickTimer(block); }, 1000);
  updateTimerUI(block);
  updateTimerButton(block);
}

function pauseTimer(block, silent) {
  const ex = state.exam[block];
  if (!ex) return;
  ex.running = false;
  saveState();
  if (timerBlock === block) clearTimerHandle();
  if (!silent) {
    updateTimerUI(block);
    updateTimerButton(block);
  }
}

function ensureTimerRunning(block) {
  const ex = state.exam[block];
  if (!ex || !ex.running || ex.submitted) return;
  if (timerHandle) return;
  timerBlock = block;
  timerHandle = setInterval(function () { tickTimer(block); }, 1000);
}

function submitBlock(block, auto) {
  const ex = state.exam[block];
  if (!ex || ex.submitted) return;
  ex.submitted = true;
  ex.running = false;
  ex.autoSubmitted = Boolean(auto);
  saveState();
  clearTimerHandle();
  const target = "simulado-" + block;
  if (currentView() === target) {
    render();
  } else {
    location.hash = target;
  }
  window.setTimeout(function () {
    const result = $(".result-card");
    if (result) result.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
}

function requestSubmit(block) {
  const total = examQuestions(block).length;
  const answered = countAnswered(block);
  if (answered < total) {
    const message = "Ainda há " + (total - answered) + " itens sem resposta. Corrigir mesmo assim?";
    if (!window.confirm(message)) return;
  }
  submitBlock(block, false);
}

function resetBlock(block) {
  if (!window.confirm("Refazer o bloco e apagar as respostas?")) return;
  state.exam[block] = createExamBlock();
  saveState();
  clearTimerHandle();
  render();
}

function renderExamQuestion(question) {
  const ex = state.exam[question.block];
  const selected = ex.answers[question.n];
  const submitted = ex.submitted;
  const correct = submitted && selected === question.answer;
  const wrong = submitted && selected !== question.answer;
  const cardClass = submitted ? (correct ? "is-correct" : "is-wrong") : "";

  let status = "Sem resposta";
  if (submitted) {
    if (correct) status = "Acertou";
    else if (selected === "C" || selected === "E") status = "Errou";
    else status = "Em branco";
  } else if (selected === "C" || selected === "E") {
    status = "Marcado: " + (selected === "C" ? "Certo" : "Errado");
  }

  const buttons = ["C", "E"].map(function (choice) {
    let classes = "ce-btn";
    if (!submitted && selected === choice) classes += " is-selected";
    if (submitted && choice === question.answer) classes += " is-correct";
    if (submitted && choice === selected && selected !== question.answer) classes += " is-wrong";
    return '<button class="' + classes + '" type="button" data-action="exam-answer" data-block="' + question.block + '" data-n="' + question.n + '" data-choice="' + choice + '" ' + (submitted ? "disabled" : "") + '>' + (choice === "C" ? "Certo" : "Errado") + '</button>';
  }).join("");

  let feedback = "";
  if (submitted) {
    feedback =
      '<div class="exam-feedback">' +
        '<p><strong>Gabarito: ' + (question.answer === "C" ? "Certo" : "Errado") + '.</strong> ' + question.explanation + '</p>' +
        '<p class="review-link">Revisar: <a href="#' + question.lesson + '">' + lessonTitle(question.lesson) + '</a></p>' +
      '</div>';
  }

  return (
    '<article class="exam-q ' + cardClass + '" data-q="' + question.n + '">' +
      '<div class="exam-q-head">' +
        '<span class="q-no">QUESTÃO ' + pad2(question.n) + '</span>' +
        '<span class="q-status">' + status + '</span>' +
      '</div>' +
      '<p class="exam-statement">' + question.statement + '</p>' +
      '<div class="ce-group">' + buttons + '</div>' +
      feedback +
    '</article>'
  );
}

function renderExamResult(block) {
  const score = examScore(block);
  const pass = score.correct >= 8;
  const pct = Math.round((score.correct / score.total) * 100);
  const other = block === "A" ? "B" : "A";
  const wrongLessons = [];

  examQuestions(block).forEach(function (question) {
    const chosen = state.exam[block].answers[question.n];
    if (chosen !== question.answer && wrongLessons.indexOf(question.lesson) === -1) {
      wrongLessons.push(question.lesson);
    }
  });

  const diagnostic = wrongLessons.length
    ? '<div class="diagnostic">' +
        '<h3>Priorize a revisão</h3>' +
        '<p>Você errou ou deixou em branco itens destes temas:</p>' +
        '<ul>' + wrongLessons.map(function (id) {
          return '<li><a href="#' + id + '">' + lessonTitle(id) + '</a></li>';
        }).join("") + '</ul>' +
      '</div>'
    : '<div class="diagnostic">' +
        '<h3>Bloco limpo</h3>' +
        '<p>Você acertou todos os itens deste bloco. Revise os flashcards das aulas para manter o conteúdo fresco.</p>' +
      '</div>';

  return (
    '<div class="result-card ' + (pass ? "pass" : "fail") + '">' +
      '<div class="result-top">' +
        '<div>' +
          '<p class="eyebrow">Resultado · Bloco ' + block + '</p>' +
          '<h2>' + (pass ? "Meta atingida" : "Abaixo da meta") + '</h2>' +
          '<p>' + (pass ? "Você atingiu o mínimo de 8 acertos neste bloco." : "O mínimo deste bloco é 8 acertos. Use o diagnóstico para priorizar a revisão.") + '</p>' +
        '</div>' +
        '<p class="result-score">' + score.correct + '<small> / ' + score.total + '</small></p>' +
      '</div>' +
      '<div class="result-bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="result-actions">' +
        '<button class="btn small" type="button" data-action="reset-exam" data-block="' + block + '">Refazer bloco</button>' +
        '<button class="btn small primary" type="button" data-view="simulado-' + other + '">Ir ao bloco ' + other + '</button>' +
        '<button class="btn small ghost" type="button" data-view="simulado">Visão geral</button>' +
      '</div>' +
      (state.exam[block].autoSubmitted ? '<p class="exam-note">O tempo terminou e o bloco foi corrigido automaticamente.</p>' : '') +
      diagnostic +
    '</div>'
  );
}

function renderBlockCard(block) {
  const meta = EXAM_META[block];
  const ex = state.exam[block];
  const score = examScore(block);
  const pass = score.correct >= 8;
  const isDone = ex.submitted;
  const statusPill = isDone
    ? '<span class="pill ' + (pass ? "success" : "warning") + '">' + (pass ? "Meta atingida" : "Revisar") + '</span>'
    : '<span class="pill">' + (ex.started ? "Em andamento" : "Não iniciado") + '</span>';

  return (
    '<article class="block-card ' + (isDone ? "is-done" : "") + '">' +
      '<div class="block-card-top">' +
        '<span class="block-letter">' + block + '</span>' +
        statusPill +
      '</div>' +
      '<h2>' + meta.title + '</h2>' +
      '<p>' + meta.short + '</p>' +
      '<div class="block-card-foot">' +
        '<span class="block-score">' + (isDone ? '<strong>' + score.correct + '/' + score.total + '</strong> acertos' : score.answered + '/' + score.total + ' respondidos') + '</span>' +
        '<button class="btn small ' + (isDone ? "" : "primary") + '" type="button" data-view="simulado-' + block + '">' + (isDone ? "Revisar bloco" : (ex.started ? "Continuar" : "Abrir bloco")) + ' →</button>' +
      '</div>' +
    '</article>'
  );
}

function renderExamDiagnostic() {
  if (!state.exam.A.submitted || !state.exam.B.submitted) return "";
  const wrong = {};

  EXAM.forEach(function (question) {
    const ex = state.exam[question.block];
    if (ex.answers[question.n] !== question.answer) {
      wrong[question.lesson] = (wrong[question.lesson] || 0) + 1;
    }
  });

  const ids = Object.keys(wrong).sort(function (a, b) { return wrong[b] - wrong[a]; }).slice(0, 4);
  if (!ids.length) {
    return '<div class="diagnostic"><h3>Diagnóstico geral</h3><p>Você acertou todos os itens dos dois blocos. Excelente sinal; mantenha a revisão leve até a prova.</p></div>';
  }

  return (
    '<div class="diagnostic">' +
      '<h3>Diagnóstico geral</h3>' +
      '<p>Depois dos dois blocos, estes são os temas com mais erros ou itens em branco:</p>' +
      '<ul>' + ids.map(function (id) {
        return '<li><a href="#' + id + '">' + lessonTitle(id) + '</a> · ' + wrong[id] + ' item(ns)</li>';
      }).join("") + '</ul>' +
    '</div>'
  );
}

function renderExam() {
  return (
    '<section class="exam-head">' +
      '<p class="eyebrow">Avaliação · Simulado inédito</p>' +
      '<h1>Simulado COER Classe C</h1>' +
      '<p>30 itens de <strong>Certo ou Errado</strong>, divididos em dois blocos de 15. Cada bloco tem <strong>20 minutos</strong> e meta de <strong>8 acertos</strong>. O gabarito e os comentários aparecem somente depois da correção.</p>' +
      '<div class="exam-rules">' +
        '<div class="rule-card"><strong>15</strong><span>itens por bloco</span></div>' +
        '<div class="rule-card"><strong>8</strong><span>acertos mínimos</span></div>' +
        '<div class="rule-card"><strong>20</strong><span>minutos por bloco</span></div>' +
      '</div>' +
    '</section>' +
    '<div class="block-grid">' + renderBlockCard("A") + renderBlockCard("B") + '</div>' +
    '<p class="exam-note"><strong>Origem das questões:</strong> criadas para este material com base na ementa e no formato do Ato 3448/2026. Não são transcrições de prova anterior da Anatel nem questões oficiais. O cronômetro é opcional; use-o para treinar o ritmo de 20 minutos por matéria.</p>' +
    renderExamDiagnostic() +
    '<div class="section-head"><h2>Como corrigir</h2><p>Responda ao bloco inteiro, clique em “Corrigir bloco” e leia o comentário de cada item. Depois, volte à aula indicada no feedback.</p></div>' +
    '<div class="lesson-nav">' +
      '<button class="btn small primary" type="button" data-view="simulado-A">Começar pelo bloco A</button>' +
      '<button class="btn small" type="button" data-view="simulado-B">Ir ao bloco B</button>' +
      '<button class="btn small ghost" type="button" data-view="fontes">Consultar fontes</button>' +
    '</div>'
  );
}

function renderExamBlock(block) {
  const meta = EXAM_META[block];
  const ex = state.exam[block];
  const questions = examQuestions(block);
  const answered = countAnswered(block);

  const toolbar = ex.submitted
    ? ''
    : '<div class="exam-toolbar">' +
        '<div class="timer-wrap">' +
          '<div>' +
            '<span class="timer-label">Tempo restante</span>' +
            '<span class="timer" data-timer-block="' + block + '">' + formatTime(ex.remaining) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="exam-toolbar-meta">' +
          '<span data-exam-answered="' + block + '">' + answered + '/' + questions.length + ' respondidos</span>' +
          '<span>mínimo 8 acertos</span>' +
        '</div>' +
        '<div class="exam-toolbar-actions">' +
          '<button class="btn small" type="button" data-action="timer-toggle" data-block="' + block + '">' + (ex.running ? "Pausar tempo" : (ex.started ? "Retomar tempo" : "Iniciar tempo")) + '</button>' +
          '<button class="btn small accent" type="button" data-action="submit-exam" data-block="' + block + '">Corrigir bloco</button>' +
        '</div>' +
      '</div>' +
      '<div class="exam-progress"><i data-exam-progress="' + block + '" style="width:' + Math.round((answered / questions.length) * 100) + '%"></i></div>';

  const result = ex.submitted ? renderExamResult(block) : '';

  const actions = ex.submitted
    ? ''
    : '<div class="exam-actions">' +
        '<span class="hint">' + answered + '/' + questions.length + ' respondidos · o cronômetro é opcional</span>' +
        '<div class="exam-toolbar-actions">' +
          '<button class="btn small" type="button" data-action="reset-exam" data-block="' + block + '">Limpar respostas</button>' +
          '<button class="btn small accent" type="button" data-action="submit-exam" data-block="' + block + '">Corrigir bloco</button>' +
        '</div>' +
      '</div>';

  return (
    '<section>' +
      '<div class="exam-block-head">' +
        '<div>' +
          '<p class="eyebrow">Simulado · Bloco ' + block + '</p>' +
          '<h1>' + meta.title + ' <span>' + block + '</span></h1>' +
          '<p>' + meta.short + ' 15 itens de Certo ou Errado; meta de 8 acertos em até 20 minutos.</p>' +
        '</div>' +
        '<button class="btn small ghost" type="button" data-view="simulado">← Visão geral</button>' +
      '</div>' +
      toolbar +
      result +
      (ex.submitted ? '<div class="section-head"><h2>Questões comentadas</h2><p>Confira o gabarito, o comentário e a aula sugerida para cada erro.</p></div>' : '') +
      '<div class="exam-list">' + questions.map(renderExamQuestion).join("") + '</div>' +
      actions +
    '</section>'
  );
}

/* ============================================================
   Roteamento e renderização
   ============================================================ */

function afterRender(view) {
  if (view === "simulado-A" || view === "simulado-B") {
    const block = view.slice(-1);
    ensureTimerRunning(block);
    updateTimerUI(block);
    updateTimerButton(block);
    updateExamProgress(block);
  }
}

function render() {
  const view = currentView();
  let html = "";
  let crumb = "Visão geral";
  let pageTitle = "COER Classe C · Guia de Estudos 2026";

  if (view === "fontes") {
    html = renderSourcesPage();
    crumb = "Fontes oficiais";
    pageTitle = "Fontes oficiais · COER Classe C";
  } else if (view === "simulado") {
    html = renderExam();
    crumb = "Simulado";
    pageTitle = "Simulado · COER Classe C";
  } else if (view === "simulado-A" || view === "simulado-B") {
    const block = view.slice(-1);
    html = renderExamBlock(block);
    crumb = "Simulado · Bloco " + block;
    pageTitle = "Bloco " + block + " · Simulado COER Classe C";
  } else {
    const lesson = lessonById(view);
    if (lesson) {
      html = renderLesson(lesson);
      crumb = "Aula " + pad2(lesson.number) + " · " + lesson.part;
      pageTitle = lesson.title + " · COER Classe C";
    } else {
      html = renderOverview();
      pageTitle = "COER Classe C · Guia de Estudos 2026";
    }
  }

  const viewRoot = $("#view");
  if (viewRoot) viewRoot.innerHTML = html;

  const crumbRoot = $("#crumb");
  if (crumbRoot) crumbRoot.textContent = crumb;

  document.title = pageTitle;

  state.lastView = view;
  saveState();

  renderSidebar(view);
  updateProgressUI();
  afterRender(view);
  window.scrollTo(0, 0);
}

/* ============================================================
   Menu mobile
   ============================================================ */

function closeMenu() {
  const sidebar = $("#sidebar");
  const scrim = $("#scrim");
  const menuButton = $("#menu-btn");
  if (!sidebar || !scrim || !menuButton) return;
  sidebar.classList.remove("open");
  scrim.hidden = true;
  scrim.classList.remove("show");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const sidebar = $("#sidebar");
  const scrim = $("#scrim");
  const menuButton = $("#menu-btn");
  if (!sidebar || !scrim || !menuButton) return;
  const open = sidebar.classList.toggle("open");
  scrim.hidden = !open;
  scrim.classList.toggle("show", open);
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
}

/* ============================================================
   Eventos
   ============================================================ */

function handleQuizAnswer(button) {
  const lesson = lessonById(button.dataset.lesson);
  const index = Number(button.dataset.q);
  const choice = button.dataset.choice;
  if (!lesson || !lesson.quiz[index]) return;
  if (choice !== "C" && choice !== "E") return;

  if (!state.quiz[lesson.id]) state.quiz[lesson.id] = {};
  if (state.quiz[lesson.id][index]) return;
  state.quiz[lesson.id][index] = choice;
  saveState();

  const question = lesson.quiz[index];
  const item = button.closest(".quiz-item");
  if (!item) return;
  const correctChoice = question.answer ? "C" : "E";
  const correct = choice === correctChoice;

  $$(".choice-btn", item).forEach(function (option) {
    option.disabled = true;
    const optionChoice = option.dataset.choice;
    option.classList.toggle("is-correct", optionChoice === correctChoice);
    option.classList.toggle("is-wrong", optionChoice === choice && !correct);
  });

  const feedback = $(".quiz-feedback", item);
  if (feedback) {
    feedback.hidden = false;
    feedback.innerHTML =
      '<strong class="' + (correct ? "ok" : "no") + '">' + (correct ? "Correto." : "Não exatamente.") + '</strong> ' +
      (correct ? "" : "A resposta correta é <strong>" + (question.answer ? "Certo" : "Errado") + "</strong>. ") +
      question.explanation;
  }
}

function handleCompleteLesson(button) {
  const lessonId = button.dataset.lesson;
  if (!lessonById(lessonId)) return;
  const wasDone = state.completed.indexOf(lessonId) !== -1;

  if (wasDone) {
    state.completed = state.completed.filter(function (id) { return id !== lessonId; });
  } else {
    state.completed.push(lessonId);
  }

  saveState();
  button.classList.toggle("is-done", !wasDone);
  button.textContent = !wasDone ? "Aula concluída ✓" : "Marcar aula como concluída";
  renderSidebar(currentView());
  updateProgressUI();
}

function handleExamAnswer(button) {
  const block = button.dataset.block;
  const n = Number(button.dataset.n);
  const choice = button.dataset.choice;
  const ex = state.exam[block];
  if (!ex || ex.submitted || (choice !== "C" && choice !== "E")) return;

  ex.answers[n] = choice;
  saveState();

  const question = button.closest(".exam-q");
  if (question) {
    $$(".ce-btn", question).forEach(function (option) {
      option.classList.toggle("is-selected", option.dataset.choice === choice);
    });
    const status = $(".q-status", question);
    if (status) status.textContent = "Marcado: " + (choice === "C" ? "Certo" : "Errado");
  }

  updateExamProgress(block);
}

function handleTimerToggle(button) {
  const block = button.dataset.block;
  if (!state.exam[block]) return;
  if (state.exam[block].running) {
    pauseTimer(block, false);
  } else {
    startTimer(block);
  }
}

document.addEventListener("click", function (event) {
  const target = event.target instanceof Element ? event.target : event.target.parentElement;
  if (!target) return;

  const viewButton = target.closest("[data-view]");
  if (viewButton) {
    event.preventDefault();
    go(viewButton.dataset.view);
    return;
  }

  const actionButton = target.closest("[data-action]");
  if (!actionButton) return;

  const action = actionButton.dataset.action;

  if (action === "flip-card") {
    const flipped = actionButton.classList.toggle("is-flipped");
    actionButton.setAttribute("aria-pressed", flipped ? "true" : "false");
    return;
  }

  if (action === "quiz-answer") {
    handleQuizAnswer(actionButton);
    return;
  }

  if (action === "complete-lesson") {
    handleCompleteLesson(actionButton);
    return;
  }

  if (action === "exam-answer") {
    handleExamAnswer(actionButton);
    return;
  }

  if (action === "timer-toggle") {
    handleTimerToggle(actionButton);
    return;
  }

  if (action === "submit-exam") {
    requestSubmit(actionButton.dataset.block);
    return;
  }

  if (action === "reset-exam") {
    resetBlock(actionButton.dataset.block);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenu();
});

const menuButton = $("#menu-btn");
const scrim = $("#scrim");
if (menuButton) menuButton.addEventListener("click", toggleMenu);
if (scrim) scrim.addEventListener("click", closeMenu);

window.addEventListener("hashchange", render);

render();
