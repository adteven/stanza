import { Agent } from '../';
import { NS_CORRECTION_0 } from '../protocol';
import { Message } from '../protocol';

export default function(client: Agent) {
    client.disco.addFeature(NS_CORRECTION_0);

    client.on('message', (msg: Message) => {
        if (msg.replace) {
            client.emit('replace', msg);
        }
    });
}