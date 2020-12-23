const obj = { quotes: ["All that we are is the result of what we have thought.",
                       "A jug fills drop by drop.",
                       "Showing off is the fool’s idea of glory."],

              facts: ["Earth is the only known planet with plate tectonics.",
                      "Only one two-billionth of the Sun’s energy hits the Earth.",
                      "Venus spins backward on its axis compared to all the other planets in our solar system."],

              numbers: [42, 51, 3],

              randomQuotes() {
                return this.quotes[Math.floor(Math.random() * this.quotes.length)]
              },

              randomFacts() {
                return this.facts[Math.floor(Math.random() * this.facts.length)]
              },

              randomNumbers() {
                return this.numbers[Math.floor(Math.random() * this.numbers.length)]
              }
};

console.log(`${obj.randomQuotes()} ${obj.randomFacts()} Your lucky number for today: ${obj.randomNumbers()}`)