export const About: React.FC = () => {
    return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a Dra. Nicole Benevenuto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valorizo a autenticidade, a empatia e a evolução constante. Carrego comigo o desejo genuíno de cuidar, acolher e transmitir confiança a quem está ao meu redor. Prezo pelo equilíbrio, pelas boas relações e pela energia de sempre fazer o meu melhor, não apenas no trabalho, mas em tudo o que me proponho a viver.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/me.png"
              alt="Dra. Nicole Benevenuto"
              className="rounded-3xl shadow-2xl"
            />
            </div>
            <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Compromisso com a Excelência
            </h3>
            <p className="text-lg text-gray-600 mb-6">
                Eu dedico meu trabalho a cuidar da saúde e da estética com excelência, unindo conhecimento, técnica e atenção genuína às necessidades de cada pessoa. Meu compromisso é oferecer resultados de qualidade, promovendo bem-estar, autoestima e experiências que fazem a diferença no dia a dia de quem confia no meu trabalho.
            </p>
            <p className="text-lg text-gray-600">
                Agende uma consulta e descubra como posso transformar seu sorriso, realçar sua estética e promover a regeneração da sua pele, oferecendo resultados naturais, harmoniosos e duradouros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}