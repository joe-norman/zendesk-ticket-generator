/*
 This module can be used to return a random ticket object, with subject and description
 Extend this module by simply extending the switch statement and modifying max
 */

var randomTicket = {
    newTicket: function() {
        const min = 0;
        const max = 10;
        
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
                subject = "サーバーは非常に丁寧でした";
                description = "今日は上野公園のカフェで朝食を注文しました。 サーバーの石垣さんはとても丁寧でした。 彼は私のトレイを私のテーブルに持ってきて、コーヒーが少なくなったときに私のためにコーヒーを補充しました。";
                break;
            case 7:
                subject = "They never put in enough cream";
                description = "Every time I order my coffee at your 1st Ave and 3rd St shop, I ask for a 'normal' amount of cream. They always give me two pumps. Obviously normal means 4 pumps. Why is this so difficult. Normal = 4. What is wrong with the people you hire? Do you expect your customers to have to say '4 pumps?' What is this?";
                break;
            case 8:
                subject = "Café demasiado frío";
                description = "Mi café fue servido a temperatura ambiente. No sé cuánto tiempo lo dejas esperar, pero es inaceptable tomar un café tan frío.";
                break;
            case 9:
                subject = "我的猫没有运气，也不再成功喝咖啡";
                description = "亲爱的支持人员，我需要你的帮助。我的猫，通常很幸运，现在不再幸运了。我相信他的运气来自我在他的食物中加入的咖啡渣。但是，咖啡渣使他的食物变得比平常更绿色。您可以发送更少的生咖啡粉吗？ 谢谢， 疯狂的猫家伙";
                break;
            default:
                subject = "Everything is awesome";
                description = "No problem for me. This is the best coffee.";
        }
        return {subject: subject, description: description};
    }
}

module.export = randomTicket;
