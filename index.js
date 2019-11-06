#!/usr/bin/env node
//表明这是一个可执行的应用

const fs = require('fs');
const program = require('commander');
const inquirer = require('inquirer');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

program
  .version('0.1.0', '-v, --version')
  .option('-i, --init', 'init something')
  .option('-g, --generate', 'generate something')
  .option('-r, --remove', 'remove something')
  .command('init <name>')
  .action(name => {
    if (!fs.existsSync(name)) {
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
          inquirer
            .prompt([
              {
                name: 'description',
                message: '请输入项目描述'
              },
              {
                name: 'author',
                message: '请输入作者名称'
              }
            ])
            .then(detailMsg => {
              const spinner = ora('正在下载模板...');
              spinner.start();
              switch (answers.type) {
                case 'pc':
                  download(
                    //ssh https
                    'direct:https://github.com/brianzjy/blog#master',
                    name,
                    { clone: true },
                    err => {
                      if (err) {
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                      } else {
                        spinner.succeed();
                        const fileName = `${name}/package.json`;
                        const meta = {
                          name,
                          description: detailMsg.description,
                          author: detailMsg.author
                        };
                        if (fs.existsSync(fileName)) {
                          const content = fs.readFileSync(fileName).toString();
                          const result = handlebars.compile(content)(meta);
                          fs.writeFileSync(fileName, result);
                        }
                        console.log(
                          symbols.success,
                          chalk.green('项目初始化完成')
                        );
                      }
                    }
                  );
                  break;
                case 'h5':
                  console.log('h5');
                  break;
                default:
                  console.log('default');
              }
            });
        });
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log(symbols.error, chalk.red('项目已存在'));
    }
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
