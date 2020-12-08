function parseInstruction(cmd) {
  const matches = cmd.match(/(?<cmdType>\w+) (?<value>[-+]\d+)/);
  const result = {
    value: 0,
    nextCmd: 1,
  };
  switch (matches.groups.cmdType) {
    case 'acc':
      return {
        value: Number(matches.groups.value),
        nextCmd: 1,
      };
    case 'jmp':
      return {
        ...result,
        nextCmd: Number(matches.groups.value),
      };
    default:
      return result;
  }
}

function part1(rawCommands) {
  const commands = Array.isArray(rawCommands) ? rawCommands : rawCommands.split('\n').map((x) => x.trim());

  const commandsRun = new Set();
  let result = 0;
  for (let i = 0; i < commands.length;) {
    if (commandsRun.has(i)) {
      return { value: result, isEarlyExit: true };
    }

    const nextState = parseInstruction(commands[i]);
    commandsRun.add(i);
    i += nextState.nextCmd;
    result += nextState.value;
  }
  return { value: result, isEarlyExit: false };
}

function flipCmd(cmd) {
  return cmd.replace(/nop|jmp/, (match) => (match === 'nop' ? 'jmp' : 'nop'));
}

function part2(rawCommands) {
  const commands = rawCommands
    .split('\n')
    .map((x) => x.trim());

  const nopJmpIndexes = commands
    .reduce((list, cmd, i) => (/(nop|jmp)/.test(cmd)
      ? list.concat(i)
      : list
    ), []);

  for (const x of nopJmpIndexes) {
    const newCommands = [
      ...commands.slice(0, x),
      flipCmd(commands[x]),
      ...commands.slice(x + 1),
    ];
    const result = part1(newCommands);

    if (!result.isEarlyExit) return result.value;
  }
}

module.exports = {
  part1,
  part2,
};
