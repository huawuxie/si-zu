-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2019 年 05 月 28 日 04:57
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `anlian`
--

-- --------------------------------------------------------

--
-- 表的结构 `liuyan`
--

CREATE TABLE IF NOT EXISTS `liuyan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(30) CHARACTER SET utf8 NOT NULL,
  `time` varchar(30) CHARACTER SET utf8 NOT NULL,
  `countes` varchar(30) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
)  ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;;

-- --------------------------------------------------------

--
-- 表的结构 `personal`
--

CREATE TABLE IF NOT EXISTS `personal` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `img` char(200) CHARACTER SET utf8 NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `phone`  varchar(100) CHARACTER SET utf8 NOT NULL,
  `text` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `personal` VALUES ('1', '', 'lili', '', '../images/boy-1.jpg');
-- --------------------------------------------------------

--
-- 表的结构 `user`
--

-- CREATE TABLE IF NOT EXISTS `user` (
--   `ID` int(11) NOT NULL AUTO_INCREMENT,
--   `username` varchar(255) NOT NULL,
--   `password` varchar(255) NOT NULL,
--   PRIMARY KEY (`ID`)
-- ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


