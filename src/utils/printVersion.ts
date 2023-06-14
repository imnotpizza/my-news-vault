import packageJson from '../../package.json';

export default function printVersion() {
  console.log('My News Vault ver:', packageJson.version);
};