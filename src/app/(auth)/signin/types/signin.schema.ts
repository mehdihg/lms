import z from 'zod'
export const signinSchema= z.object({
    mobile:z.string().regex(/^09[0-9]{9}$/,{
        message:'شماره موبایل باید 11 رقم باشد و فرمت ان صحیح باشد! '
    })
})