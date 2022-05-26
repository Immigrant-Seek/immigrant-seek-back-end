/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
        { first_name: "Dominic", last_name: "Cullen", email: "dominiccullen@schweikartcokely.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/GtCLbST3/1584841952852.jpg", is_lawyer: true, firm: "Schweikart & Cokely", bio: "" },
        { first_name: "Hazel", last_name: "Rodriguez", email: "hazelrodriguez@mesaverde.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/W4xpH42k/1516855419924.jpg", is_lawyer: true, firm: "Mesa Verde", bio: "" },
        { first_name: "Eleanor", last_name: "Williams", email: "eleanorwilliams@mesaverde.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/yY715tzv/1527711827114.jpg", is_lawyer: true, firm: "Mesa Verde", bio: "" },
        { first_name: "Alayna", last_name: "Melenia", email: "alaynamelenia@mesaverde.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/05Y5Vxhz/1595305864711.jpg", is_lawyer: true, firm: "Mesa Verde", bio: "" },
        { first_name: "Matteo", last_name: "Flores", email: "matteoflores@schweikartcokely.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/J0510cjN/1577985480754.jpg", is_lawyer: true, firm: "Schweikart & Cokely", bio: "" },
        { first_name: "Omar", last_name: "Hu", email: "omarhu@goodmanassociates.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/Ss8QFpst/1540322620155.jpg", is_lawyer: true, firm: "Saul Goodman & Associates", bio: "" },
        { first_name: "Addison", last_name: "Keller", email: "addisonkeller@hhm.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/VL78hNgk/1618273371085.jpg", is_lawyer: true, firm: "Hamlin, Hamlin & McGill", bio: "" },
        { first_name: "Esther", last_name: "Roberts", email: "estherroberts@hhm.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/WbSNP8Nj/1596286726724.jpg", is_lawyer: true, firm: "Hamlin, Hamlin & McGill", bio: "" },
        { first_name: "Preston", last_name: "Allen", email: "prestonallen@mesaverde.org", password: "pswrd", profile_pic_link: "https://i.postimg.cc/nVGZv2Q7/1643236359168.jpg", is_lawyer: true, firm: "Hamlin, Hamlin & McGill", bio: "" }
    ]);
};