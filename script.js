let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [300, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function findInRange(range){
    let result = [];
    courses.forEach((course) =>{
        if (course.prices[0] >= range[0] && course.prices[0] <= range[1] //Проверяю попадает диапозон курсов в диапозон пользователя
        ||  course.prices[1] >= range[0] && course.prices[1] <= range[1]

        ||  range[0] >= course.prices[0] && range[0] <= course.prices[1] //Проверяю попадает диапозон пользователя в диапозон курсов
        ||  range[1] >= course.prices[0] && range[1] <= course.prices[0] 

        ||  course.prices[0] == null     && course.prices[1] == null){ // не забываем про курсы с неизвестным началом и концом
            result.push(course)
        } 
    })
    return result;
}
findInRange([100,200])
