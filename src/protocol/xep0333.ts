// ====================================================================
// XEP-0333: Chat Markers
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0333.html
// Version: 0.3.0 (2017-09-11)
// ====================================================================

import { attribute, DefinitionOptions } from '../jxt';

import { NS_CHAT_MARKERS_0 } from '../Namespaces';

declare module './' {
    export interface Message {
        marker?: ChatMarker;
    }
}

export interface ChatMarker {
    type: 'markable' | 'received' | 'displayed' | 'acknowledged';
    id?: string;
}

const path = 'message.marker';

const Protocol: DefinitionOptions[] = [
    {
        element: 'markable',
        namespace: NS_CHAT_MARKERS_0,
        path,
        type: 'markable',
        typeField: 'type'
    },
    {
        element: 'received',
        fields: {
            id: attribute('id')
        },
        namespace: NS_CHAT_MARKERS_0,
        path,
        type: 'received'
    },
    {
        element: 'displayed',
        fields: {
            id: attribute('id')
        },
        namespace: NS_CHAT_MARKERS_0,
        path,
        type: 'displayed'
    },
    {
        element: 'acknowledged',
        fields: {
            id: attribute('id')
        },
        namespace: NS_CHAT_MARKERS_0,
        path,
        type: 'acknowledged'
    }
];
export default Protocol;
