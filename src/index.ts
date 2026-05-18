/**
 * @amlplugins/deepgram-agent
 *
 * Thin namespaced re-export of the native @deepgram/sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Deepgram Voice Agent — full-duplex Listen+LLM+Speak pipeline over WebSocket, tools, barge-in handling.
 */

import * as _sdk from "@deepgram/sdk";
export * from "@deepgram/sdk";
export { _sdk as sdk };
export default _sdk;
