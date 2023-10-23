"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anderson",
    avatar: "A",
    title: "CEO e Desenvolvedor Full Stack",
    description: "A utilização de Inteligência Artificial nos estudos e nas pesquisas melhoraram e muito a produção!",
  },
  {
    name: "Arlindo",
    avatar: "Ar",
    title: "CTO",
    description: "Eu utilizei para gerar algumas imagens, me surpriendi!",
  },
  {
    name: "Anônimo",
    avatar: "An",
    title: "Estudante",
    description: "O App está me ajudando nos estudos e em várias tarefas que faço semanalmente, muitop bom!",
  },
  {
    name: "Anônimo",
    avatar: "Ano",
    title: "Estudante",
    description: "O melhor da categoria, definitivamente vale a assinatura premium!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Depoimentos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}