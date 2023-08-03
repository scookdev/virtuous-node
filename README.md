# Virtuous API

## Configuration

The package needs to be configured with your Virtuous account's API keys and URI as environment variables:

* VIRTUOUS_API_BASE_URI (should be set to https://api.virtuoussoftware.com)
* VIRTUOUS_API_PASSWORD
* VIRTUOUS_API_USERNAME

## Installation

### To add the Virtuous package to your application

#### npm

`npm i @stevorevo/virtuous-node`

#### yarn

`yarn add @stevorevo/virtuous-node`

## Usage

### To include the package in a file

#### TypeScript

```
import * as Virtuous from '@stevorevo/virtuous-node'

const giftTransaction = new Virtuous.GiftTransaction()
```

### Gift Query Sample

#### Return all 2023 gifts 
```
const query = {
  groups: [
    {
      conditions: [
        {
          parameter: 'Create Date',
          operator: 'GreaterThanOrEqual,
          value: '01/01/2023'
        }
    }
  ],
  sortBy: 'Id',
  descending: 'true'
}
```
