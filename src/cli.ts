import CLIApplication from './cli/cliApplication.js';
import HelpCommand from './cli/commands/help.js';
import VersionCommand from './cli/commands/version.js';
import ImportCommand from './cli/commands/import.js';
import GenerateCommand from './cli/commands/generat.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand(),
  new VersionCommand(),
  new ImportCommand(),
  new GenerateCommand(),
]);
myManager.processCommand(process.argv);
