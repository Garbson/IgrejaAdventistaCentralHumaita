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
          <v-icon size="large" color="secondary" class="mr-2"
            >mdi-hand-heart</v-icon
          >
          <span class="text-h4">Dizimar & Ofertar</span>
        </v-card-title>

        <v-card class="message-card mb-8">
          <v-card-text class="message-text">
            <p>
              Aqui você encontra diferentes formas para expressar sua gratidão
              ao Senhor através dos dízimos e ofertas.
            </p>
          </v-card-text>
        </v-card>

        <!-- Botões de Doação -->
        <div class="donation-buttons">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn
              v-bind="props"
              block
              color="primary"
              size="x-large"
              to="/dizimos"
              class="donation-btn"
              :class="{ 'btn-hover': isHovering }"
              prepend-icon="mdi-currency-usd"
              rounded="lg"
            >
              <span class="text-h6">PIX</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-btn
              v-bind="props"
              block
              color="secondary"
              size="x-large"
              to="/dadosbancarios"
              class="donation-btn"
              :class="{ 'btn-hover': isHovering }"
              prepend-icon="mdi-bank"
              rounded="lg"
            >
              <span class="text-h6">DADOS BANCÁRIOS</span>
            </v-btn>
          </v-hover>

          <v-hover v-slot="{ isHovering, props }">
            <v-btn
              v-bind="props"
              block
              color="accent"
              size="x-large"
              class="donation-btn"
              :class="{ 'btn-hover': isHovering }"
              prepend-icon="mdi-leaf"
              href="https://7me.app/70/donation-7me.html?churchSeq=9"
              target="_blank"
              rounded="lg"
            >
              <span class="text-h6">7 ME</span>
            </v-btn>
          </v-hover>
        </div>
        <!-- Calculadora de Dízimos e Ofertas -->
        <v-card class="calculator-card mt-10">
          <v-card-title class="calculator-title">
            <v-icon color="primary" size="large" class="mr-2"
              >mdi-calculator</v-icon
            >
            <span>Calculadora de Dízimos e Ofertas</span>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="calculator-content py-6">
            <!-- Instrução da calculadora -->
            <div class="calculator-instruction mb-6">
              <v-icon color="info" class="mr-2">mdi-information-outline</v-icon>
              <span
                >Informe sua renda mensal para calcular seus dízimos e
                ofertas</span
              >
            </div>

            <!-- Valor base -->
            <div class="input-group mb-6">
              <label class="input-label">Valor do seu salário/renda</label>
              <v-text-field
                v-model="valorBase"
                prefix="R$"
                type="number"
                variant="outlined"
                density="comfortable"
                bg-color="white"
                class="value-input rounded-xl"
                hide-details
                rounded="xl"
                @input="calcularValores"
              ></v-text-field>
            </div>

            <!-- Resultados -->
            <div class="results-container">
              <!-- Dízimo -->
              <v-card
                class="result-card primary-gradient"
                rounded="lg"
                elevation="3"
              >
                <div class="result-content">
                  <div class="result-label">
                    <v-icon color="white" size="small"
                      >mdi-calculator-variant</v-icon
                    >
                    <span>Dízimo (10%)</span>
                  </div>
                  <div class="result-value">R$ {{ dizimo }}</div>
                </div>
              </v-card>

              <!-- Oferta -->
              <div class="offering-section my-6">
                <label class="input-label mb-2 offering-title">
                  <v-icon color="#2563eb" size="small" class="mr-1"
                    >mdi-percent</v-icon
                  >
                  Escolha o percentual da oferta
                </label>
                <div class="offering-inputs">
                  <v-text-field
                    v-model="percentualOferta"
                    label="Oferta"
                    suffix="%"
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    hide-details
                    variant="outlined"
                    density="comfortable"
                    bg-color="white"
                    class="percentage-input rounded-xl"
                    @update:model-value="calcularValores"
                    rounded="xl"
                  ></v-text-field>

                  <div class="percentage-buttons">
                    <v-btn
                      variant="tonal"
                      color="secondary"
                      size="small"
                      @click="
                        percentualOferta = 3;
                        calcularValores();
                      "
                      rounded="lg"
                      class="percentage-btn"
                    >
                      3%
                    </v-btn>
                    <v-btn
                      variant="tonal"
                      color="secondary"
                      size="small"
                      @click="
                        percentualOferta = 5;
                        calcularValores();
                      "
                      rounded="lg"
                      class="percentage-btn"
                    >
                      5%
                    </v-btn>
                    <v-btn
                      variant="tonal"
                      color="secondary"
                      size="small"
                      @click="
                        percentualOferta = 10;
                        calcularValores();
                      "
                      rounded="lg"
                      class="percentage-btn"
                    >
                      10%
                    </v-btn>
                  </div>
                </div>

                <v-card
                  class="result-card secondary-gradient mt-3"
                  rounded="lg"
                  elevation="3"
                >
                  <div class="result-content">
                    <div class="result-label">
                      <v-icon color="white" size="small">mdi-heart</v-icon>
                      <span>Oferta ({{ percentualOferta }}%)</span>
                    </div>
                    <div class="result-value">R$ {{ oferta }}</div>
                  </div>
                </v-card>
              </div>

              <!-- Total -->
              <v-card
                class="result-card accent-gradient mt-6"
                rounded="lg"
                elevation="4"
              >
                <div class="result-content">
                  <div class="result-label">
                    <v-icon color="white" size="small"
                      >mdi-cash-multiple</v-icon
                    >
                    <span>Total</span>
                  </div>
                  <div class="result-value">R$ {{ total }}</div>
                </div>
                <div class="total-caption">
                  Este valor total representa a soma do dízimo (10%) e da
                  oferta. Lembre-se que o dízimo é uma devolução ao Senhor,
                  enquanto a oferta é um gesto de gratidão pelo que Ele tem
                  feito em sua vida.
                </div>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
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
        <span>Copiado para a área de transferência: {{ copiedText }}</span>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      valorBase: 1000,
      percentualOferta: 5,
      dizimo: "100.00",
      oferta: "50.00",
      total: "150.00",
      showCopiedToast: false,
      copiedText: "",
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  mounted() {
    this.calcularValores();
  },
  methods: {
    calcularValores() {
      const valor = parseFloat(this.valorBase) || 0;
      const dizimo = valor * 0.1;
      const oferta = valor * (this.percentualOferta / 100);

      this.dizimo = dizimo.toFixed(2);
      this.oferta = oferta.toFixed(2);
      this.total = (dizimo + oferta).toFixed(2);
    },
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
  width: 100% !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.15) !important;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.message-card {
  background-color: rgba(30, 58, 138, 0.08) !important;
  border-radius: 15px !important;
  border-left: 4px solid #1e3a8a;
}

.message-text {
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
  padding: 16px;
}

/* Botões de doação */
.donation-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.donation-btn {
  border-radius: 12px !important;
  height: 70px !important;
  letter-spacing: 1.2px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
}

/* Calculadora */
.calculator-card {
  margin-top: 40px;
  border-radius: 18px !important;
  border: 1px solid rgba(59, 130, 246, 0.2);
  background-color: rgba(255, 255, 255, 0.97) !important;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(30, 58, 138, 0.12) !important;
}

.calculator-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e3a8a;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(219, 234, 254, 0.4);
  text-align: center;
  flex-wrap: wrap;
}

@media (min-width: 600px) {
  .calculator-title {
    font-size: 1.3rem;
    padding: 20px;
  }
}

.calculator-content {
  padding: 25px;
}

@media (max-width: 600px) {
  .calculator-content {
    padding: 15px 12px;
  }
}

.calculator-instruction {
  display: flex;
  align-items: flex-start;
  background-color: #eff6ff;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  color: #1e40af;
  border-left: 4px solid #3b82f6;
  font-size: 0.95rem;
}

.input-group {
  margin-bottom: 25px;
  background-color: rgba(219, 234, 254, 0.5);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.input-label {
  font-weight: 600;
  margin-bottom: 10px;
  color: #1e3a8a;
  display: block;
  font-size: 1.05rem;
}

.offering-title {
  color: #1e3a8a;
  display: flex;
  align-items: center;
}

.value-input {
  background-color: white;
  border-radius: 10px;
}

.results-container {
  margin-top: 20px;
}

.result-card {
  padding: 0;
  border-radius: 12px !important;
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.result-content {
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.primary-gradient {
  background: linear-gradient(120deg, #1e3a8a, #2563eb) !important;
  color: white;
}

.secondary-gradient {
  background: linear-gradient(120deg, #3b82f6, #60a5fa) !important;
  color: white;
}

.accent-gradient {
  background: linear-gradient(120deg, #0d47a1, #1976d2) !important;
  color: white;
}

.result-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.95rem;
}

.result-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
}

@media (min-width: 600px) {
  .result-label {
    font-size: 1.05rem;
    gap: 10px;
  }

  .result-value {
    font-size: 1.3rem;
  }
}

.total-caption {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
}

.offering-section {
  margin: 20px 0;
  background-color: #e6f0ff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-left: 4px solid #2563eb;
}

.offering-inputs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.percentage-input {
  background-color: white;
  border-radius: 10px;
}

.percentage-buttons {
  display: flex;
  gap: 8px;
  margin-top: 5px;
}

.percentage-btn {
  flex: 1;
  min-width: 60px;
  transition: all 0.2s ease;
}

.percentage-btn:hover {
  transform: translateY(-2px);
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

  .message-card {
    margin-bottom: 16px !important;
  }

  .title-section {
    margin-bottom: 12px;
  }

  .donation-buttons {
    gap: 12px;
  }

  .donation-btn {
    height: 60px !important;
  }

  .calculator-card {
    margin-top: 20px;
  }

  .offering-inputs {
    flex-direction: column;
  }

  .percentage-buttons {
    width: 100%;
    justify-content: space-between;
    margin-top: 8px;
  }

  .whatsapp-btn {
    font-size: 0.9rem;
  }

  .btn-text {
    white-space: nowrap;
  }
}

@media (max-width: 400px) {
  .calculator-title {
    font-size: 1rem;
    padding: 12px 8px;
  }

  .calculator-title .v-icon {
    margin-right: 6px !important;
  }

  .calculator-content {
    padding: 15px 10px;
  }

  .input-group,
  .offering-section {
    padding: 15px 10px;
    margin-bottom: 15px;
  }

  .input-label {
    font-size: 0.95rem;
  }

  .percentage-btn {
    min-width: 45px;
  }

  .result-label {
    font-size: 0.85rem;
    gap: 5px;
  }

  .result-value {
    font-size: 1.1rem;
  }
}
</style>
