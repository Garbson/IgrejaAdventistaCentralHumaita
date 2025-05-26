<template>
  <div>
    <!-- Fundo com gradiente azul suave -->
    <div class="background-gradient"></div>

    <!-- Conteúdo principal -->
    <div class="content-container">
      <!-- Cabeçalho com Logo -->
      <div class="church-header">
        <div class="logo-wrapper">
          <img
            src="../assets/logoIgreja.png"
            alt="Logo Igreja Adventista"
            class="church-logo"
          />
        </div>
        <h1 class="church-name">Igreja Adventista do Sétimo Dia</h1>
        <h2 class="church-location">Central Humaitá</h2>
      </div>

      <!-- Card Principal -->
      <v-card class="main-card" elevation="6">
        <v-card-title class="title-section">
          <v-icon size="large" color="secondary" class="mr-2">mdi-bank</v-icon>
          <span class="text-h4 bank-title">Dados Bancários</span>
        </v-card-title>

        <!-- Informações Bancárias -->
        <v-card class="bank-details-card">
          <div class="bank-header">
            <v-icon size="28" color="white" class="mr-2"
              >mdi-bank-outline</v-icon
            >
            <span>Conta para Depósito/Transferência</span>
          </div>

          <div class="bank-content">
            <div class="bank-info">
              <div class="bank-row">
                <div class="bank-label">Banco</div>
                <div class="bank-value d-flex align-center">
                  <span>Bradesco</span>
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="copyToClipboard('Bradesco')"
                  ></v-btn>
                </div>
              </div>

              <div class="bank-row">
                <div class="bank-label">Agência</div>
                <div class="bank-value d-flex align-center">
                  <span>153-8</span>
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="copyToClipboard('153-8')"
                  ></v-btn>
                </div>
              </div>

              <div class="bank-row">
                <div class="bank-label">Conta</div>
                <div class="bank-value d-flex align-center">
                  <span>240055-3</span>
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="copyToClipboard('240055-3')"
                  ></v-btn>
                </div>
              </div>

              <div class="bank-row">
                <div class="bank-label">Tipo</div>
                <div class="bank-value">Conta Corrente</div>
              </div>

              <div class="bank-row">
                <div class="bank-label">CNPJ</div>
                <div class="bank-value d-flex align-center">
                  <span>11.200.726/0016-70</span>
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="copyToClipboard('11.200.726/0016-70')"
                  ></v-btn>
                </div>
              </div>

              <div class="bank-row">
                <div class="bank-label">Titular</div>
                <div class="bank-value d-flex align-center">
                  <span>União Noroeste Brasileira da IASD</span>
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="
                      copyToClipboard('União Noroeste Brasileira da IASD')
                    "
                  ></v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-card>

        <!-- Instruções -->
        <v-card class="instructions-card mt-6 mb-6">
          <div class="instructions-header">
            <v-icon color="success" size="28" class="mr-2">mdi-whatsapp</v-icon>
            <span>Envio de Comprovante</span>
          </div>

          <div class="instructions-content">
            <p class="instruction-text">
              Após realizar a transferência, envie o comprovante pelo WhatsApp:
            </p>

            <div
              class="whatsapp-highlight d-flex align-center justify-space-between mb-4"
            >
              <div>
                <v-icon color="success" class="mr-2">mdi-whatsapp</v-icon>
                <strong>(97) 8113-4217 - Tereza</strong>
              </div>
              <v-btn
                icon="mdi-content-copy"
                size="small"
                variant="text"
                color="primary"
                @click="copyToClipboard('')"
              ></v-btn>
            </div>

            <v-btn
              color="success"
              block
              class="mb-4 whatsapp-btn"
              prepend-icon="mdi-whatsapp"
              :href="`https://wa.me/559781134217?text=Olá, estou enviando o comprovante do meu dízimo/oferta.`"
              target="_blank"
              rounded="lg"
            >
              Enviar via WhatsApp
            </v-btn>

            <p class="instruction-note">
              Ao enviar o comprovante, informe os valores de dízimos e ofertas
              para destinarmos corretamente.
            </p>
          </div>
        </v-card>

        <!-- Botão de Retorno -->
        <v-btn
          block
          color="primary"
          size="large"
          to="/"
          class="return-btn"
          prepend-icon="mdi-arrow-left"
          rounded="lg"
        >
          Voltar à página inicial
        </v-btn>
      </v-card>
    </div>

    <!-- Rodapé -->
    <footer class="app-footer">
      <div class="bible-verse">
        <p class="verse-text">
          "Trazei todos os dízimos à casa do tesouro, para que haja mantimento
          na minha casa; e provai-me nisso, diz o Senhor dos Exércitos, se eu
          não vos abrir as janelas do céu e não derramar sobre vós bênção sem
          medida."
        </p>
        <p class="verse-reference">Malaquias 3:10</p>
      </div>
      <div class="footer-divider"></div>
      <p class="footer-copyright">
        IASD Central Humaitá - {{ currentYear }} - Todos os direitos reservados.
      </p>
    </footer>

    <!-- Toast de cópia -->
    <v-snackbar
      v-model="showCopiedToast"
      :timeout="2000"
      color="success"
      location="top"
      rounded="pill"
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">mdi-check-circle</v-icon>
        <span>Copiado: {{ copiedText }}</span>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "DadosBancariosPage",
  data() {
    return {
      showCopiedToast: false,
      copiedText: "",
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedText = text;
        this.showCopiedToast = true;
        setTimeout(() => {
          this.showCopiedToast = false;
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
/* Estilos gerais */
.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  z-index: -1;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 16px 60px;
}

/* Estilos do cabeçalho */
.church-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
}

.logo-wrapper {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
  margin-bottom: 16px;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.church-logo {
  width: 140px;
  height: auto;
  object-fit: contain;
  animation: pulse 3s infinite ease-in-out;
}

.church-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 8px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.church-location {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 16px;
}

/* Card principal */
.main-card {
  border-radius: 20px !important;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.15) !important;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.bank-title {
  text-align: center;
  font-size: 1.8rem;
}

/* Dados Bancários Card */
.bank-details-card {
  border-radius: 16px !important;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.15) !important;
}

.bank-header {
  display: flex;
  align-items: center;
  background-color: #1e3a8a;
  color: white;
  padding: 16px;
  font-size: 1.2rem;
  font-weight: 600;
}

.bank-content {
  padding: 16px;
  background-color: white;
}

.bank-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bank-row {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.bank-label {
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 6px;
}

.bank-value {
  font-size: 1.1rem;
}

@media (min-width: 600px) {
  .bank-row {
    flex-direction: row;
    align-items: center;
  }

  .bank-label {
    width: 120px;
    margin-bottom: 0;
  }

  .bank-value {
    flex: 1;
  }
}

/* Instruções */
.instructions-card {
  border-radius: 16px !important;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1) !important;
}

.instructions-header {
  display: flex;
  align-items: center;
  background-color: #f0fdf4;
  padding: 16px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #166534;
  border-bottom: 1px solid #dcfce7;
}

.instructions-content {
  padding: 16px;
  background-color: white;
}

.instruction-text {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #1e293b;
}

.instruction-note {
  margin-top: 16px;
  font-size: 0.95rem;
  color: #64748b;
  font-style: italic;
}

.whatsapp-highlight {
  background-color: #f0fdf4;
  border-left: 3px solid #22c55e;
  padding: 12px;
  border-radius: 0 8px 8px 0;
  font-size: 1.05rem;
  color: #166534;
}

.whatsapp-btn {
  height: 48px;
  font-weight: 600;
  font-size: 1rem;
}

/* Botão de Retorno */
.return-btn {
  height: 56px !important;
  font-weight: 600;
  border-radius: 12px !important;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.return-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.2) !important;
}

/* Rodapé */
.app-footer {
  background-color: #1e3a8a;
  color: white;
  text-align: center;
  padding: 24px 16px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bible-verse {
  max-width: 800px;
  margin-bottom: 15px;
}

.verse-text {
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 8px;
  color: #e0f2fe;
}

.verse-reference {
  font-family: "Arial", sans-serif;
  font-weight: 600;
  color: #93c5fd;
  font-size: 0.95rem;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 80%;
  max-width: 500px;
  margin: 15px 0;
}

.footer-copyright {
  font-family: "Verdana", sans-serif;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Animações */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsividade - já incluído no design acima */
@media (min-width: 768px) {
  .content-container {
    padding: 30px 20px 80px;
  }

  .logo-wrapper {
    width: 220px;
    height: 220px;
  }

  .church-logo {
    width: 180px;
  }

  .main-card {
    padding: 30px;
  }

  .bank-title {
    font-size: 2rem;
  }

  .instruction-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .content-container {
    padding: 20px 8px 60px;
    width: 100%;
    max-width: 100%;
  }

  .logo-wrapper {
    width: 180px;
    height: 180px;
  }

  .church-logo {
    width: 140px;
  }

  .church-name {
    font-size: 1.6rem;
  }

  .church-location {
    font-size: 1.2rem;
  }

  .main-card {
    padding: 12px;
    width: 100% !important;
    border-radius: 16px !important;
  }

  .bank-content,
  .instructions-content {
    padding: 15px 10px;
  }

  .bank-header,
  .instructions-header {
    padding: 12px;
  }

  .bank-title {
    font-size: 1.4rem;
  }

  .whatsapp-btn {
    font-size: 0.9rem;
  }

  .btn-text {
    white-space: nowrap;
  }
}
</style>
