## Movie Seat Booking

展示正在上映的电影以及电影票价、座位供用户选择，计算总票价

## Project Specifications

1. 创建电影院UI（电影选择，电影巨幕，3种状态的座位，总票价）
2. 用户可以选择一个电影
3. 用户可以选择/取消空闲的座位
4. 实时计算总票价
5. 保存座位，电影，价格数据到local storage,达到keep-alive的效果

tips: 这句const container = document.querySelector('.container')如果用getElementByClassName得到的是一个HTMLCollection数组，
待会用的时候记得加下标container[0]，否则你都不知道哪错了哟！
