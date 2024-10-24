import { test } from '@playwright/test';

test('Working with environments', async ({  }) => {
    console.log(process.env.URL);
    console.log(process.env.USER);
});
