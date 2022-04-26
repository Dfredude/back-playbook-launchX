const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   // 1
   explorers.forEach((explorer) => {
       console.log(explorer);
   })
   // 2
   explorers.forEach((explorer) => {
       explorer.stack.forEach((tech) => {console.log(tech)})
   })
   // 3
   stacks = explorers.map((explorer) => {
       return explorer.stack
   })

   console.log(stacks);

   // 4
   good = explorers.filter((explorer) => explorer.stack.includes("js"))
   console.log(good);

   // 5
   cdmx = explorers.find((explorer) => explorer.city == "CDMX")
   console.log(cdmx);

   // 6
   total_exercises = explorers.reduce((prev, explorer) => prev+explorer.exercises_completed  ,0)
   console.log(total_exercises);

   // 7
   finished = explorers.some((explorer) => explorer.missions.frontend.isFinished === true)
   console.log(finished);

   // 8
   finished = explorers.every((explorer) => explorer.missions.frontend.isFinished === true)
   console.log(finished);