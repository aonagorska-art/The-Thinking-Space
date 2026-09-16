import {test,expect} from '@playwright/test';
test('bookshelf, reveals, locale and level persistence',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:/THE THINKING SPACE Easy/i}).click();
 const title=await page.locator('article h2').textContent();
 await page.getByRole('button',{name:'Show me the answer'}).click();await expect(page.locator('.reason-block')).toHaveCount(0);
 await page.getByRole('button',{name:'Explain the reasoning'}).click();
 await page.getByRole('button',{name:'Back to the bookshelf'}).click();await page.getByRole('button',{name:/THE THINKING SPACE Medium/i}).click();
 await page.getByRole('button',{name:'Back to the bookshelf'}).click();await page.getByRole('button',{name:/THE THINKING SPACE Easy/i}).click();
 await expect(page.locator('article h2')).toHaveText(title!);await expect(page.locator('.reason-block')).toBeVisible();
 await page.getByRole('button',{name:'Polski',exact:true}).click();await page.reload();await expect(page.locator('html')).toHaveAttribute('lang','pl');await expect(page.locator('.reason-block')).toBeVisible();
});
test('mobile layout and reduced motion',async({page})=>{await page.setViewportSize({width:320,height:740});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.getByRole('button',{name:/THE THINKING SPACE Complex/i}).click();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);});
