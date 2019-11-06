#!/usr/bin/env node
//表明这是一个可执行的应用

const program = require('commander');
const inquirer = require('inquirer');

program
  .version('0.1.0', '-v, --version')
  .option('-i, --init', 'init something')
  .option('-g, --generate', 'generate something')
  .option('-r, --remove', 'remove something')
  .command('init <name>')
  .action(name => {
    //___todo___输出版本号为取上看的version
    console.log(`[${new Date()}] 正在检查版本, 当前版本号：0.1.0`);
    inquirer
      .prompt([
        {
          type: 'list',
          message: '请选择要初始化的项目类型:',
          name: 'type',
          choices: [
            {
              name: 'React 单页面应用（pc）',
              value: 'pc'
            },
            {
              name: '移动端H5应用（h5）',
              value: 'h5'
            }
          ],
          filter: function(val) {
            // 使用filter将回答变为小写
            return val.toLowerCase();
          }
        }
      ])
      .then(answers => {
        switch (answers.type) {
          case 'pc':
            console.log('pc');
            break;
          case 'h5':
            console.log('h5');
            break;
          default:
            console.log('default');
        }
      });
  });

program.on('--help', function() {
  console.log('  Examples:');
  console.log('   this is an example');
});

program.parse(process.argv);

if (program.init) {
  console.log('init something');
}

if (program.generate) {
  console.log('generate something');
}

if (program.remove) {
  console.log('remove something');
}
