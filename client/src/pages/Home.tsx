/**
 * Landing Page - Proposta de Convênio Farmacêutico Drogarias Maestra
 * Design: "Precisão Farmacêutica" — Editorial Moderno
 * Cores: Azul Maestra #2D4260, Vermelho #C20E1A, Azul Complementar #007AB1
 * Tipografia: Space Grotesk (display) + DM Sans (body)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Shield,
  Truck,
  CreditCard,
  Clock,
  Users,
  Syringe,
  Activity,
  Droplets,
  Ear,
  TestTube,
  MapPin,
  Phone,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Pill,
  ShoppingBag,
  BarChart3,
  FileText,
  Lock,
} from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/ma_logos_cmyk-01_8e5b425b.jpg";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/hero-pharmacy-3pcUpUsXDYfXkSYL9MXD5J.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/team-care-neTPvab7eMG8m8eVMW5QP2.webp";
const DELIVERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/delivery-service-NAmYsJCkVptPS8cLRacHLo.webp";
const HEALTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/health-services-XmJmrs6khgN6tT7hCtK3VH.webp";

// Animated counter hook
function useCounter(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
}

// Section wrapper with fade-in animation
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stat counter component
function StatCounter({ value, suffix = "", label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
        {count}{suffix}
      </div>
      <div className="mt-3 text-sm md:text-base text-white/70 font-body uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <img
            src={LOGO_URL}
            alt="Drogarias Maestra"
            className="h-10 md:h-12 object-contain"
          />
          <div className="hidden md:flex items-center gap-8">
            {["Benefícios", "Serviços", "Como Funciona", "Unidades"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#2D4260] hover:text-[#C20E1A]" : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5519996966543?text=Ol%C3%A1%2C%20vim%20pelo%20site!"
            className="bg-[#C20E1A] text-white px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#a00c16] transition-all duration-300 rounded-sm"
          >
            Solicitar Convênio
          </a>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Farmácia Maestra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D4260]/95 via-[#2D4260]/80 to-[#2D4260]/40" />
        </div>

        {/* Red accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C20E1A] z-10" />

        <div className="relative z-10 container pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-white font-display text-sm font-semibold tracking-[0.3em] uppercase mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm">
                Proposta de Convênio Farmacêutico
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Cuidando da saúde
              <br />
              dos seus
              <br />
              <span className="text-[#f3202e]">colaboradores</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-xl"
            >
              Há mais de 30 anos oferecendo atendimento de excelência em Vinhedo.
              Um benefício gratuito que valoriza sua equipe e fortalece sua empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#benefícios"
                className="inline-flex items-center justify-center gap-2 bg-[#C20E1A] text-white px-8 py-4 font-display font-semibold text-base tracking-wide hover:bg-[#a00c16] transition-all duration-300 rounded-sm"
              >
                Conheça os Benefícios
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-display font-semibold text-base tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm"
              >
                Como Funciona
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#2D4260] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <StatCounter value={30} suffix="+" label="Anos de mercado" delay={0} />
            <StatCounter value={15} suffix="%" label="Desconto fixo negociável" delay={0.1} />
            <StatCounter value={75} suffix="%" label="Promoções com até" delay={0.2} />
            <StatCounter value={7} suffix="" label="Unidades em Vinhedo" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section id="benefícios" className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-[#C20E1A] font-display text-sm font-semibold tracking-[0.3em] uppercase">
                Benefícios
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-[#2D4260] tracking-tight leading-tight">
                Um benefício gratuito
                <br />
                <span className="text-[#585857]">que gera resultados</span>
              </h2>
              <p className="mt-6 text-lg text-[#585857] font-body leading-relaxed max-w-2xl">
                O convênio farmacêutico Maestra é um produto gratuito para a empresa,
                que não onera a folha de pagamento e traz benefícios reais para a gestão
                e para os colaboradores.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Custo Zero para a Empresa",
                desc: "Sem taxas, encargos administrativos ou anuidades. O convênio é totalmente gratuito para sua empresa.",
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Desconto Fixo de 15%",
                desc: "Todos os colaboradores têm desconto fixo de 15% em todos os produtos, em todas as lojas.",
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Até 75% nas Promoções",
                desc: "Descontos que podem chegar a 75% nas promoções e ofertas especiais das Drogarias Maestra.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Prazo de até 60 Dias",
                desc: "Prazo estendido de até 60 dias para pagamento, facilitando o planejamento financeiro dos colaboradores.",
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Entrega Gratuita",
                desc: "Entrega na empresa sem custo para pedidos acima de R$30,00. Praticidade e comodidade.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Indicadores de Saúde",
                desc: "Fornecemos indicadores de saúde que auxiliam na redução de faltas e acidentes de trabalho.",
              },
            ].map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group p-8 bg-[#f8f9fb] hover:bg-[#2D4260] transition-all duration-500 rounded-sm h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2D4260] group-hover:bg-[#C20E1A] text-white transition-all duration-500 rounded-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-[#2D4260] group-hover:text-white transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[#585857] group-hover:text-white/80 font-body leading-relaxed transition-colors duration-500">
                    {benefit.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHT SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TEAM_IMG} alt="Equipe Maestra" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2D4260]/90" />
        </div>
        <div className="relative z-10 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-white font-display text-sm font-semibold tracking-[0.3em] uppercase">
                Sobre Nós
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Tradição e inovação
                <br />
                em saúde
              </h2>
              <p className="mt-6 text-lg text-white/80 font-body leading-relaxed">
                A Drogarias Maestra é uma empresa familiar e geracional, fundada por
                Natanael Aguiar Costa, com forte compromisso com atendimento humano,
                qualidade e inovação. Fazemos parte da Farmarcas, a maior rede
                associativista de farmácias do Brasil.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Atendimento personalizado e humanizado",
                  "Preços competitivos e serviços eficientes",
                  "75 colaboradores dedicados à sua saúde",
                  "Referência regional em serviços farmacêuticos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C20E1A] shrink-0" />
                    <span className="text-white/90 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm">
                  <Heart className="w-8 h-8 text-[#C20E1A] mb-3" />
                  <div className="font-display text-2xl font-bold text-white">Missão</div>
                  <p className="mt-2 text-sm text-white/70 font-body">
                    Servir com alegria, respeito e ética, superando expectativas.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm">
                  <Users className="w-8 h-8 text-[#007AB1] mb-3" />
                  <div className="font-display text-2xl font-bold text-white">Visão</div>
                  <p className="mt-2 text-sm text-white/70 font-body">
                    Ser a farmácia referência da região em atendimento e serviços.
                  </p>
                </div>
                <div className="col-span-2 bg-white/10 backdrop-blur-sm p-6 rounded-sm">
                  <Shield className="w-8 h-8 text-[#C20E1A] mb-3" />
                  <div className="font-display text-2xl font-bold text-white">Valores</div>
                  <p className="mt-2 text-sm text-white/70 font-body">
                    Atendimento personalizado, respeito, espírito de equipe e melhoria contínua.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section id="serviços" className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#C20E1A] font-display text-sm font-semibold tracking-[0.3em] uppercase">
                  Serviços
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-[#2D4260] tracking-tight leading-tight">
                  Muito além de
                  <br />
                  medicamentos
                </h2>
                <p className="mt-6 text-lg text-[#585857] font-body leading-relaxed">
                  Oferecemos uma gama completa de serviços de saúde e bem-estar,
                  disponíveis para todos os colaboradores conveniados.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031538098/GES2bUhMofNg3AKf9cqaaM/vaccine-clinic-52Uk5HyQaMGhi8niC8biQQ.webp"
                  alt="Clínica de Vacinas Maestra"
                  className="w-full rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-[#C20E1A] text-white p-4 rounded-sm">
                  <div className="font-display text-2xl font-bold">Clínica</div>
                  <div className="text-sm text-white/80">de Vacinas</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Activity className="w-5 h-5" />, name: "Aferição Pressão Arterial" },
              { icon: <Syringe className="w-5 h-5" />, name: "Aplicação de Injetáveis" },
              { icon: <Stethoscope className="w-5 h-5" />, name: "Clínica de Vacinas" },
              { icon: <Truck className="w-5 h-5" />, name: "Entregas Gratuitas" },
              { icon: <TestTube className="w-5 h-5" />, name: "Exames Rápidos" },
              { icon: <Ear className="w-5 h-5" />, name: "Perfuração de Orelha" },
              { icon: <Droplets className="w-5 h-5" />, name: "Testes Rápidos" },
              { icon: <Pill className="w-5 h-5" />, name: "Teste de Glicemia" },
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-[#f8f9fb] hover:bg-[#2D4260] group transition-all duration-400 rounded-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#007AB1]/10 group-hover:bg-white/20 text-[#007AB1] group-hover:text-white transition-all duration-400 rounded-sm shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#2D4260] group-hover:text-white transition-colors duration-400 font-body">
                    {service.name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Produtos */}
          <AnimatedSection>
            <div className="mt-16 p-8 md:p-12 bg-[#f8f9fb] rounded-sm">
              <h3 className="font-display text-2xl font-bold text-[#2D4260]">
                Produtos Disponíveis no Convênio
              </h3>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Medicamentos",
                    items: ["Medicamentos em geral", "Genéricos", "Manipulação"],
                  },
                  {
                    title: "Higiene & Perfumaria",
                    items: ["Dermocosméticos", "Perfumes", "Higiene pessoal"],
                  },
                  {
                    title: "Suplementos & Mais",
                    items: ["Suplementos alimentares", "Produtos para lactentes", "Primeiros socorros"],
                  },
                ].map((cat, i) => (
                  <div key={i}>
                    <h4 className="font-display font-bold text-[#C20E1A] text-lg">{cat.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-[#585857] font-body">
                          <div className="w-1.5 h-1.5 bg-[#007AB1] rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section id="como-funciona" className="py-20 md:py-28 bg-[#2D4260]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#C20E1A] font-display text-sm font-semibold tracking-[0.3em] uppercase">
                Como Funciona
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Simples, seguro e
                <br />
                sem burocracia
              </h2>
            </div>
          </AnimatedSection>

          {/* Steps */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <FileText className="w-6 h-6" />,
                title: "Credenciamento",
                desc: "A empresa cadastra seus colaboradores. Cada um recebe o Cartão Convênio Maestra exclusivo e gratuito, sem taxas ou anuidades.",
              },
              {
                step: "02",
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Compras",
                desc: "Colaboradores apresentam RG/CNH, crachá ou Cartão Convênio nas lojas. A empresa pode definir limites de compra por colaborador.",
              },
              {
                step: "03",
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Fechamento",
                desc: "Fechamento mensal único com soma de todas as lojas. Cupons fiscais detalhados com produtos, nome e assinatura do funcionário.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm h-full">
                  <div className="font-display text-6xl font-bold text-white/20 absolute top-4 right-6">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C20E1A] text-white rounded-sm">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white/70 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Control features */}
          <AnimatedSection>
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                <Lock className="w-8 h-8 text-[#007AB1] mb-4" />
                <h3 className="font-display text-xl font-bold text-white">
                  Controle Total da Empresa
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Vendas somente para colaboradores credenciados",
                    "Definição de limite de compras por colaborador",
                    "Acesso online de compras, saldos e limites em tempo real",
                    "Sistema online para controle e acompanhamento",
                    "Débito automático na folha de pagamento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#007AB1] mt-1 shrink-0" />
                      <span className="text-white/80 font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={DELIVERY_IMG}
                  alt="Serviço de entrega"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4260] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-display text-3xl font-bold text-white">
                    Entrega Gratuita
                  </div>
                  <p className="mt-2 text-white/80 font-body">
                    Pedidos acima de R$30,00 entregues diretamente na empresa, sem custo adicional.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== UNIDADES ===== */}
      <section id="unidades" className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#C20E1A] font-display text-sm font-semibold tracking-[0.3em] uppercase">
                Nossas Unidades
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-[#2D4260] tracking-tight leading-tight">
                7 unidades em Vinhedo
                <br />
                <span className="text-[#585857]">e mais de 20 lojas na região</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Drogarias Ultra Popular",
                address: "Estr. Municipal da Capela, 2500",
                neighborhood: "Vista Alegre",
                cep: "13285-342",
                highlight: false,
              },
              {
                name: "Drogaria Maestra | Clínica de Vacinas",
                address: "Av. dos Imigrantes, 214",
                neighborhood: "Jardim Itália",
                cep: "13289-186",
                highlight: true,
              },
              {
                name: "Drogaria Maestra",
                address: "R. Dr. Anésio Augusto do Amaral, 249",
                neighborhood: "Centro",
                cep: "13280-000",
                highlight: false,
              },
              {
                name: "Drogaria Maestra",
                address: "Rua Nove de Julho, 253",
                neighborhood: "Centro",
                cep: "13280-000",
                highlight: false,
              },
              {
                name: "Drogaria Maestra",
                address: "Rua Felisbina Corazzari Matheus, 450",
                neighborhood: "Vila João XXIII",
                cep: "13280-000",
                highlight: false,
              },
              {
                name: "Maestra Capela",
                address: "Av. Nossa Senhora de Lourdes, 90",
                neighborhood: "Capela",
                cep: "13280-000",
                highlight: false,
              },
              {
                name: "Maestra Econômica",
                address: "Av. Benedito Storani, 288",
                neighborhood: "Centro",
                cep: "13280-000",
                highlight: false,
              },
            ].map((store, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`p-6 rounded-sm h-full border transition-all duration-300 hover:shadow-lg ${
                    store.highlight
                      ? "bg-[#2D4260] border-[#2D4260] text-white"
                      : "bg-white border-[#e5e7eb] hover:border-[#2D4260]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        store.highlight ? "text-[#C20E1A]" : "text-[#007AB1]"
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-display font-bold text-base ${
                          store.highlight ? "text-white" : "text-[#2D4260]"
                        }`}
                      >
                        {store.name}
                      </h3>
                      <p
                        className={`mt-2 font-body text-sm ${
                          store.highlight ? "text-white/80" : "text-[#585857]"
                        }`}
                      >
                        {store.address}
                      </p>
                      <p
                        className={`font-body text-sm ${
                          store.highlight ? "text-white/60" : "text-[#585857]/60"
                        }`}
                      >
                        {store.neighborhood} — Vinhedo/SP
                      </p>
                      <p
                        className={`font-body text-xs mt-1 ${
                          store.highlight ? "text-white/50" : "text-[#585857]/50"
                        }`}
                      >
                        CEP: {store.cep}
                      </p>
                      {store.highlight && (
                        <span className="inline-block mt-3 text-xs font-semibold text-[#C20E1A] bg-white/10 px-3 py-1 rounded-sm">
                          Clínica de Vacinas
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Card de outras cidades */}
            <AnimatedSection delay={0.5}>
              <div className="p-6 rounded-sm h-full border border-dashed border-[#007AB1]/40 bg-[#007AB1]/5 hover:bg-[#007AB1]/10 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#007AB1]" />
                  <div>
                    <h3 className="font-display font-bold text-base text-[#2D4260]">
                      Outras Cidades
                    </h3>
                    <p className="mt-2 font-body text-sm text-[#585857]">
                      Também estamos presentes em:
                    </p>
                    <div className="mt-3 space-y-2">
                      {[
                        { city: "Louveira", units: "2 unidades" },
                        { city: "Valinhos", units: "2 unidades" },
                        { city: "Itatiba", units: "2 unidades" },
                        { city: "Jundiaí", units: "3 unidades" },
                        { city: "Campinas", units: "2 unidades" },
                        { city: "Indaiatuba", units: "1 unidade" },
                        { city: "Itupeva", units: "1 unidade" },
                        { city: "Morungaba", units: "1 unidade" },
                      ].map((loc, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#2D4260] font-body">{loc.city}</span>
                          <span className="text-xs text-[#585857]/70 font-body">{loc.units}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-[#007AB1] font-semibold font-body">
                      + de 20 lojas na região
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="contato" className="py-20 md:py-28 bg-[#C20E1A]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Pronto para oferecer este
                <br />
                benefício aos seus colaboradores?
              </h2>
              <p className="mt-6 text-lg text-white/90 font-body leading-relaxed max-w-xl mx-auto">
                Entre em contato conosco e solicite a implantação do convênio
                farmacêutico na sua empresa. É gratuito e sem burocracia.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5519996966543?text=Ol%C3%A1%2C%20vim%20pelo%20site!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#C20E1A] px-8 py-4 font-display font-bold text-base tracking-wide hover:bg-white/90 transition-all duration-300 rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  Fale Conosco
                </a>
                <a
                  href="https://wa.me/5519996966543?text=Ol%C3%A1%2C%20vim%20pelo%20site!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-display font-bold text-base tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm"
                >
                  WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1a2d42] py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <img
                src={LOGO_URL}
                alt="Drogarias Maestra"
                className="h-12 object-contain"
              />
              <p className="mt-3 text-sm text-white/50 font-body">
                Há mais de 30 anos cuidando da saúde
                <br />
                e bem-estar em Vinhedo/SP.
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/40 font-body">
                Membro da{" "}
                <span className="text-white/60 font-semibold">Farmarcas</span>
                <br />
                Maior rede associativista de farmácias do Brasil
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-white/50 font-body">
                Delivery: (19) 98935-5581
              </p>
              <p className="text-sm text-white/50 font-body mt-1">
                juliana.roder@gmail.com
              </p>
              <p className="text-xs text-white/30 font-body mt-4">
                Drogarias Maestra — Vinhedo/SP
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/30 font-body">
              Proposta de Convênio Farmacêutico — Drogarias Maestra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
