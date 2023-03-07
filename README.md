# Google Identity

https://developers.google.com/identity/protocols/oauth2/
https://console.cloud.google.com/apis/credentials?project=sso-test-373909
https://vue3-google-signin.syetalabs.io/guide/creating-custom-buttons.html

## Exceptions

### error: redirect_uri_mismatch

> https://stackoverflow.com/questions/11485271/google-oauth-2-authorization-error-redirect-uri-mismatch#:~:text=Other%20common%20URI%20mismatch%20are%3A%201%20Using%20http%3A%2F%2F,slash%20%28%20http%3A%2F%2Fexample.com%29%20as%20actual%20URL%2C%20or%20vice-versa

# Apple

https://yaorui.test105.ascendex-sandbox.com/api/apple/endpoint
https://yaorui.test105.ascendex-sandbox.com/api/apple/callback

## 配置

弹窗：Create an account for pc test using your Apple ID “rui.yao@ascendex.com”. 中会有【pc test】

### ❗️ 配置邮箱

1. 打开 https://developer.apple.com/account/resources/services/list
2. Configure Sign in with Apple for Email Communication
3. Email Sources 中填入 ascendex.com

# Firebase

## Google

## Apple

### 配置 firebase 回调地址

> 入口：https://developer.apple.com/account/resources/identifiers/list/serviceId

## 验证邮箱

是否需要邮箱？不需要吧

> Authentication - templates

### ❗️ 修改发件人域名

> 点击：Customize domain

## 配额

https://firebase.google.com/docs/auth/limits?authuser=0&hl=zh
https://cloud.google.com/identity-platform/pricing?authuser=0

# 客户端

## 撤销用户授权

### Google

Google Account:

Security - Manage third-party access - Apps with access to your account - Signing in with Google

## 域名配置

firebase 默认回调地址为 https://bitmax-87eb1.firebaseapp.com/__/auth/handler，`https://bitmax-87eb1.firebaseapp.com` 会显示在 Google 登陆的界面上：`Choose an account
to continue to bitmax-87eb1.firebaseapp.com`，很不友好，应该改为显示 `auth.ascendex.com`。

1. 打开 https://console.firebase.google.com/project/bitmax-87eb1/hosting/sites ，点击 `Add Custom Domain`
2. 填写 `auth.ascendex.com`，下一步，DNS 配置 A 解析：`auth.ascendex.com` -> `199.36.158.100`，完成
3. `auth.ascendex.com` 的状态为 `Pending`
4. 修改 Google 和 Apple 后台配置的回调地址为`https://auth.ascendex.com/__/auth/handler`，访问路径：
   - Google: Credentials / Authorized redirect URIs
   - Apple: Identifiers - Service IDs - Website URLs - Return URLs
5. 修改代码：

```js
- authDomain: "sso-test-373909.firebaseapp.com",
+ authDomain: "auth.ascendex.com",
```

重新测试可以看到界面显示已经是 `auth.ascendex.com`。
功能正常，但是跳转时会看到浏览器提示 https 不安全，等待 24h 状态由`Pending`变为``后，重新测试可以看到 https 状态正常了。
