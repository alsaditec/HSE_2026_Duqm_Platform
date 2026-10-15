# ☁️ Azure Deployment Guide - منصة HSE 2026

**نشر المنصة على Azure للوصول من أي مكان**

---

## 📋 المتطلبات

- ✅ حساب Microsoft (بريد Outlook أو Office 365)
- ✅ Node.js مثبت
- ✅ Visual Studio Code (اختياري)
- ✅ اتصال بالإنترنت

---

## 🚀 الخطوات السريعة (15 دقيقة)

### الخطوة 1: إنشاء حساب Azure

1. اذهب إلى: https://azure.microsoft.com/
2. اضغط **Create Free Account** (حساب مجاني)
3. استخدم بريدك: `ibn.ibra2@gmail.com`
4. أدخل معلومات الدفع (لن يتم الخصم على الطبقة المجانية)
5. أكمل التحقق

**ستحصل على**:
- 12 شهر خدمات مجانية
- $200 رصيد مجاني
- كافي للتطبيق الصغير

---

### الخطوة 2: تثبيت Azure CLI

افتح **PowerShell** واكتب:

```powershell
# تحميل مثبت Azure CLI
$ProgressPreference = 'SilentlyContinue'
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi
.\AzureCLI.msi /quiet
```

أو **الطريقة اليدوية**:
1. اذهب إلى: https://aka.ms/azure-cli
2. حمّل Windows Installer
3. ثبّت عادي

**تحقق من التثبيت**:
```bash
az --version
```

---

### الخطوة 3: تسجيل الدخول إلى Azure

```bash
az login
```

**سيفتح متصفح**:
1. اختر حسابك (ibn.ibra2@gmail.com)
2. اضغط تسجيل دخول
3. PowerShell يظهر بيانات حسابك

---

### الخطوة 4: إنشاء Resource Group

```bash
# أنشئ مجموعة موارد (container للتطبيق)
az group create `
  --name HSE-2026-RG `
  --location eastus
```

---

### الخطوة 5: إنشاء App Service Plan

```bash
# أنشئ خطة الخدمة (تحديد الموارد)
az appservice plan create `
  --name HSE-2026-Plan `
  --resource-group HSE-2026-RG `
  --sku F1 `
  --is-linux
```

**ملاحظة**: `F1` = طبقة مجانية

---

### الخطوة 6: نشر التطبيق

```bash
# انتقل إلى مجلد المشروع
cd C:\Users\Hisham\Downloads\HSE_2026_Duqm_Platform

# نشر التطبيق
az webapp create `
  --resource-group HSE-2026-RG `
  --plan HSE-2026-Plan `
  --name hse-2026-duqm `
  --runtime "node|18-lts" `
  --deployment-source-url https://github.com/your-username/hse-2026-duqm `
  --deployment-source-branch main
```

---

### الخطوة 7: بناء وتشغيل

```bash
# بناء التطبيق
npm run build

# اختبر محلياً أولاً
npm start
```

---

## 🔗 الرابط النهائي

بعد النشر، سيكون رابطك:

```
https://hse-2026-duqm.azurewebsites.net
```

**شارك هذا الرابط مع فريقك!** ✅

---

## 🎯 إذا حدثت مشاكل

### المشكلة: "Resource group already exists"
```bash
# احذف المجموعة القديمة
az group delete --name HSE-2026-RG --yes
```

### المشكلة: "App already exists"
```bash
# اختر اسم مختلف
az webapp create --name hse-2026-duqm-v2 ...
```

### المشكلة: "Invalid subscription"
```bash
# عرّف الـ subscription
az account list
az account set --subscription "your-subscription-id"
```

---

## 📊 رصد التطبيق

### عرض السجلات
```bash
az webapp log tail `
  --resource-group HSE-2026-RG `
  --name hse-2026-duqm
```

### تحديث التطبيق
```bash
# عند التعديل على الملفات
git push
# يعاد النشر تلقائياً
```

---

## 💰 التكلفة

| الخدمة | الطبقة | السعر |
|--------|--------|-------|
| App Service | F1 (مجاني) | مجاني |
| تخزين | 1GB | مجاني |
| عرض النطاق | 60 دقيقة/يوم | مجاني |
| **المجموع** | - | **مجاني** ✅ |

**بعد انتهاء الـ 12 شهر مجاني**:
- الخطة B1 (الأساسية): $10-20 شهرياً

---

## ✅ بعد النشر على Azure

الآن:
1. ✅ التطبيق يعمل على الإنترنت
2. ✅ يمكن الوصول من أي مكان
3. ✅ HTTPS آمن تلقائياً
4. ✅ جاهز للـ Teams

**الخطوة التالية**: اذهب إلى **TEAMS_INTEGRATION.md**

---

**خطوات المساعدة**:
- حقق من بريدك - قد تصل رسالة من Microsoft
- احفظ الرابط: `https://hse-2026-duqm.azurewebsites.net`
- استعد لـ Teams في الخطوة التالية

**الوقت المتوقع**: 15-20 دقيقة ⏱️
