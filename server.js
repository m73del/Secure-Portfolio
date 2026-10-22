const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// السماح بقراءة بيانات JSON القادمة من الواجهة الأمامية
app.use(express.json());

// مسار تجريبي للتأكد أن السيرفر يعمل
app.get('/', (req, res) => {
    res.send('السيرفر يعمل بنجاح!');
});

// ... المسار التجريبي السابق
app.get('/', (req, res) => {
    res.send('السيرفر يعمل بنجاح!');
});

// === هنا تلصق الكود الجديد ===
const mockUser = {
    email: "M.Code737",
    password: "zK9#vL7!mP$2026"
};

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "يرجى تقديم البريد الإلكتروني وكلمة السر" });
    }

    if (email === mockUser.email && password === mockUser.password) {
        return res.status(200).json({
            message: "تم تسجيل الدخول بنجاح!",
            user: { email: mockUser.email }
        });
    } else {
        return res.status(401).json({ message: "البريد الإلكتروني أو كلمة السر غير صحيحة" });
    }
});

// === وبتبقى app.listen دائماً هي آخر شي في الملف ===
app.listen(PORT, () => {
    console.log(`السيرفر شغال على البورت ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`السيرفر شغال على البورت ${PORT}`);
});