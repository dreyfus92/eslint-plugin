import {RuleTester} from 'eslint';
import {baselineTarget} from './baseline-target.js';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  }
});

ruleTester.run('baseline-target', baselineTarget as never, {
  valid: ['const x = a ?? b;', 'x = 1;'],
  invalid: [
    {
      code: 'new URLPattern();',
      errors: [{messageId: 'exceedsYear', data: {year: 2025, floor: 2023}}]
    },
    {
      code: 'Temporal.Now;',
      errors: [{messageId: 'notBaseline', data: {feature: 'temporal'}}]
    }
  ]
});