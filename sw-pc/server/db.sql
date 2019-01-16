#设置客户端连接使用的编码
SET NAMES UTF8;
#丢弃数据库sw,如果存在
DROP DATABASE IF EXISTS sw;
#创建数据库,存储的编码
CREATE DATABASE sw CHARSET=UTF8;
#1.进入该数据库
USE sw;
#2:创建表 sw_news
#技巧1:库名;表名;列表;全英文小写字母
CREATE TABLE sw_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd VARCHAR(50)
);
INSERT INTO sw_news VALUES(null,"tom","123");
INSERT INTO sw_news VALUES(null,'jerry',"123");
INSERT INTO sw_news VALUES(null,'陈逸飞牛逼',"123");