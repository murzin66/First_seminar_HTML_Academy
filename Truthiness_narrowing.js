function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) { // Использование приведения типа к bool, в зависимости от логического значения выбирается нужная ветка
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(1));
/***  К ложному значению приводятся значения:
0
NaN
""(пустая строка)
0n( bigintверсия нуля)
null
undefined*/ 
