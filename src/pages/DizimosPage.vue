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
          <v-icon size="large" color="primary" class="mr-2"
            >mdi-currency-usd</v-icon
          >
          <span class="text-h4">Dízimos e Ofertas</span>
        </v-card-title>

        <!-- PIX Card -->
        <v-card class="pix-card mb-6">
          <div class="pix-header">
            <v-icon size="28" color="white">mdi-qrcode</v-icon>
            <span>Chave PIX</span>
          </div>

          <div class="pix-content">
            <div class="pix-key-container">
              <div class="pix-key">pix.humaita1@anra.org.br</div>
              <v-btn
                icon
                density="comfortable"
                variant="tonal"
                color="secondary"
                size="small"
                class="copy-btn"
                :class="{ copied: showCopiedMessage }"
                @click="copyToClipboard"
              >
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>

            <v-slide-y-transition>
              <div v-if="showCopiedMessage" class="copied-message">
                <v-icon color="success" size="small" class="mr-1"
                  >mdi-check-circle</v-icon
                >
                Chave copiada com sucesso!
              </div>
            </v-slide-y-transition>
          </div>
        </v-card>

        <!-- Instruções -->
        <v-card class="instructions-card mb-8">
          <div class="instructions-header">
            <v-icon color="primary" size="28">mdi-information-outline</v-icon>
            <span>Instruções</span>
          </div>
          <div class="instructions-content">
            <p>Após fazer sua oferta por esse meio, por favor:</p>

            <div class="instruction-step">
              <div class="step-number">1</div>
              <div class="step-text">
                Encaminhe o comprovante da transação pelo WhatsApp da
                tesoureira:
              </div>
            </div>

            <div
              class="whatsapp-highlight d-flex align-center justify-space-between"
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
                @click="copyTextToClipboard('9781134217')"
              ></v-btn>
            </div>
            <v-btn
              color="success"
              block
              class="mt-4 mb-3 whatsapp-btn"
              prepend-icon="mdi-whatsapp"
              :href="`https://wa.me/559781134217?text=Olá, estou enviando o comprovante do meu dízimo/oferta.`"
              target="_blank"
              rounded="lg"
            >
              <span class="btn-text">Enviar via WhatsApp</span>
            </v-btn>

            <div class="instruction-step">
              <div class="step-number">2</div>
              <div class="step-text">
                Informe os valores de dízimos e ofertas para destinarmos
                corretamente.
              </div>
            </div>

            <div class="instruction-step">
              <div class="step-number">3</div>
              <div class="step-text">
                Você receberá um recibo confirmando sua contribuição.
              </div>
            </div>
          </div>
        </v-card>

        <!-- Dados Bancários -->
        <v-expansion-panels class="bank-panel mb-8">
          <v-expansion-panel>
            <v-expansion-panel-title class="bank-panel-title">
              <div class="d-flex align-center">
                <v-icon color="secondary" class="mr-2">mdi-bank</v-icon>
                <span>Dados Bancários</span>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bank-panel-content">
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
                      @click="copyTextToClipboard('Bradesco')"
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
                      @click="copyTextToClipboard('153-8')"
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
                      @click="copyTextToClipboard('240055-3')"
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
                      @click="copyTextToClipboard('11.200.726/0016-70')"
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
                        copyTextToClipboard('União Noroeste Brasileira da IASD')
                      "
                    ></v-btn>
                  </div>
                </div>
              </div>
              <v-alert
                class="mt-4 mb-4"
                color="success"
                border="start"
                density="compact"
                variant="tonal"
              >
                <strong>IMPORTANTE:</strong> Após realizar a transferência,
                envie o comprovante pelo WhatsApp:
                <div class="d-flex align-center mt-2 mb-2">
                  <strong
                    >(97) 8113-4217 - Tereza - Tesoureira da igreja</strong
                  >
                  <v-btn
                    icon="mdi-content-copy"
                    size="x-small"
                    class="ml-2"
                    variant="text"
                    color="primary"
                    @click="copyTextToClipboard('97811342172')"
                  ></v-btn>
                </div>
                <v-btn
                  color="success"
                  block
                  class="mt-2 whatsapp-btn"
                  prepend-icon="mdi-whatsapp"
                  :href="`https://wa.me/559781134217?text=Olá, estou enviando o comprovante do meu dízimo/oferta.`"
                  target="_blank"
                  rounded="lg"
                >
                  <span class="btn-text">Enviar via WhatsApp</span>
                </v-btn>
              </v-alert>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
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
  </div>

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
      <span>Copiado para a área de transferência: {{ copiedText }}</span>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  name: "DizimosPage",
  data() {
    return {
      showCopiedMessage: false,
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
    copyToClipboard() {
      navigator.clipboard.writeText("pix.humaita1@anra.org.br");
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 3000);
    },
    copyTextToClipboard(text) {
      navigator.clipboard.writeText(text);
      this.copiedText = text;
      this.showCopiedToast = true;
      setTimeout(() => {
        this.showCopiedToast = false;
      }, 2000);
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
  padding: 30px 20px 80px;
}

/* Estilos do cabeçalho */
.church-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
}

.logo-wrapper {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
  margin-bottom: 16px;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.church-logo {
  width: 180px;
  height: auto;
  object-fit: contain;
  animation: pulse 3s infinite ease-in-out;
}

.church-name {
  font-size: 2rem;
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
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.15) !important;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  text-align: center;
}

/* PIX Card */
.pix-card {
  border-radius: 16px !important;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.15) !important;
}

.pix-header {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #1e3a8a;
  color: white;
  padding: 16px 24px;
  font-size: 1.3rem;
  font-weight: 600;
}

.pix-content {
  padding: 24px;
  background-color: white;
}

.pix-key-container {
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}

.pix-key {
  flex: 1;
  font-size: 1.2rem;
  font-weight: 500;
  color: #1e293b;
}

.copy-btn {
  transition: all 0.3s ease;
}

.copy-btn.copied {
  background-color: #ecfdf5;
  color: #059669;
}

.copied-message {
  display: flex;
  align-items: center;
  color: #059669;
  font-weight: 500;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #ecfdf5;
  border-radius: 6px;
  animation: fadeIn 0.3s ease;
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
  gap: 12px;
  background-color: #eff6ff;
  padding: 16px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a;
  border-bottom: 1px solid #dbeafe;
}

.instructions-content {
  padding: 24px;
  background-color: white;
}

.instruction-step {
  display: flex;
  margin: 16px 0;
  align-items: flex-start;
  gap: 12px;
}

.step-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #1e3a8a;
  color: white;
  border-radius: 50%;
  font-weight: 600;
  flex-shrink: 0;
}

.step-text {
  font-size: 1.1rem;
  color: #1e293b;
  padding-top: 4px;
}

.email-highlight,
.whatsapp-highlight {
  background-color: #f0fdf4;
  border-left: 3px solid #22c55e;
  padding: 12px 16px;
  margin: 16px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #15803d;
  border-radius: 0 8px 8px 0;
}

.whatsapp-btn {
  height: 48px !important;
  font-weight: 600;
  font-size: 1rem;
}

.btn-text {
  white-space: nowrap;
}

/* Dados Bancários */
.bank-panel {
  border-radius: 16px !important;
  overflow: hidden;
}

.bank-panel-title {
  font-weight: 600;
}

.bank-panel-content {
  padding: 16px;
}

.bank-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bank-row {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.bank-label {
  width: 100px;
  font-weight: 600;
  color: #1e3a8a;
}

.bank-value {
  flex: 1;
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
  font-size: 1.1rem;
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
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

  .pix-key {
    font-size: 0.9rem;
  }

  .bank-row {
    flex-direction: column;
  }

  .bank-label {
    width: 100%;
    margin-bottom: 4px;
  }

  .whatsapp-btn {
    font-size: 0.9rem;
  }

  .btn-text {
    white-space: nowrap;
  }

  .pix-content,
  .bank-panel-content,
  .instructions-content {
    padding: 15px 10px;
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}
</style>
