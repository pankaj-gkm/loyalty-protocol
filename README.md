# loyalty-protocol

A React hook for communicating with the Loyalty Protocol iframe.

## Installation

```sh
npm install loyalty-protocol
```

## Usage

```jsx
import { useLoyaltyChannel } from "loyalty-protocol";

const { sendInformationToLoyaltyProtocol } = useLoyaltyChannel();

sendInformationToLoyaltyProtocol({ url: "https://example.com" });
```

## API

### useLoyaltyChannel

Returns an object with the following method:

- `sendInformationToLoyaltyProtocol({ url })`: Sends a message to the Loyalty Protocol iframe.

## License

ISC
