const axios = require('axios')
exports.handler = async (event) => {

    var ticket = RandomTicket();

    try {
        const response = await axios({
            method:"post",
            url:`https://${process.env.ZenDeskDomain}.com/api/v2/tickets.json`,
            auth:{
                username: `${process.env.ZenDeskUsername}/token`,
                password: process.env.ZenDeskPassword
            },
            data: {
                "ticket": {
                    "subject": ticket.subject,
                    "comment": {"body": ticket.description}
                }
            }
        });
        const results = response.data;
        return {
            statusCode: 200,
            body: results
        };
    } catch (err) {
        console.error(err);
    }
}
m
function RandomTicket() {
    var min = 0;
    var max = 10;
    
    min = Math.ceil(min);
    max = Math.floor(max);
    var a = Math.floor(Math.random() * (max - min)) + min;

    var subject = "";
    var description = "";

    switch(a) {
        case 0:
            subject = "I love my coffee!";
            description = "Today I got my coffee for free, thanks to the NFL promotion! Beth, my server, was excellent as always. I love RJDemos! Please keep up the good work!";
            break;
        case 1:
            subject = "I was overcharged for this latte";
            description = "I paid $3.99 for this latte, but the Half off Latte promo should have cut it down to $2. How can you get me my money back?";
            break;
        case 2:
            subject = "I asked for no salt!";
            description = "I asked for no salt, NO SALT, on my bagel! And what's this? There's salt! I want to speak to management. You owe me an apology! I'll call my senator!";
            break;
        case 3:
            subject = "serviço ruim";
            description = "Fui na sua loja ontem e o café estava horrível, frio e amargo. Por favor, melhore ou seu serviço e eu  também gostaria de receber um reembolso. Obrigado pela atenção. Daniel";
            break;
        case 4:
            subject = "Latte discount not working";
            description = "The discount for half off a latte is failing everywhere I try it this morning. You should look into it.";
            break;
        case 5:
            subject = "Why is the wifi broken again?!";
            description = "The wifi at your location at the corner of Beacon and Harvard Street is always down. I'm gonna go to one of your competitors if I can't do work while I drink my coffee. Fix your wifi.";
            break;
        case 6:
            subject = "";
            description = "";
            break;
        case 7:
            subject = "";
            description = "";
            break;
        case 8:
            subject = "";
            description = "";
            break;
        case 9:
            subject = "我的猫没有运气，也不再成功喝咖啡";
            desciption = "亲爱的支持人员，我需要你的帮助。我的猫，通常很幸运，现在不再幸运了。我相信他的运气来自我在他的食物中加入的咖啡渣。但是，咖啡渣使他的食物变得比平常更绿色。您可以发送更少的生咖啡粉吗？ 谢谢， 疯狂的猫家伙";
            break;
        default:
            subject = "";
            description = "";
    }
    return {subject: subject, description: description};
}
