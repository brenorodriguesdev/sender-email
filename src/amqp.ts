import { connect, type Message, type Channel } from 'amqplib'

let amqp

connect(String(process.env.AMQP_CONNECTION)).then(connection => {
  amqp = connection
}).catch(error => { console.log(error) })

const createQueue = async (
  queueName: string,
  func: (message: Message | null, channel: Channel) => void
): Promise<void> => {
  const channel: Channel = await amqp.createChannel()
  await channel.assertQueue(queueName, { durable: true })
  channel.consume(queueName, (message: Message | null) => { func(message, channel) })
}

export { createQueue }
