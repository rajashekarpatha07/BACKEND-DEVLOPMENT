import chalk from "chalk"
import { setTimeout } from "timers/promises"
const CPU1_usage = '40%'
const CPU2_usage = '80%'
const CPU3_usage = '100%'
console.log((`CPU:${chalk.bgGreen.bold(CPU1_usage)}`))
console.log((`CPU:${chalk.bgYellow.bold(CPU2_usage)}`))
console.log((`CPU:${chalk.bgRed.bold(CPU3_usage)}`))
console.log(chalk.greenBright('Success...!'))