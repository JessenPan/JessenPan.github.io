---
title: css的auto和100%宽度的区别
date: 2016-10-20
tags:
- css
categories:
- 计算机
---

## css盒模型:border-box content-box

浏览器使用矩形盒子来进行文档中的元素。为了描述矩形盒子的大小,css使用盒子模型来描述矩形的大小(长宽)

css的盒子模型包含了矩形的长度`width`和高度`height`.

但是对于长度和宽度是否包含:`border-width`和`padding`,又分为:`border-box`和`content-box`这两种计算模型。

<!-- more -->

对于`border-box`模型:

    盒子宽度=border-left+padding-left+width+padding-right+border-right

对于`content-box`模型:
    盒子宽度=width

对于同一副图片,使用不同的盒子模型设置width,效果如下:
![盒模](https://ws3.sinaimg.cn/large/006tNbRwgy1fp9xn98qtsj30dv0dvn11.jpg)

## width:auto和100%的区别

> 以下针对:box-sizeing:content-box

当构建一个网页的整体布局(layout)的时候,最开始需要的是设置最外层div的宽度,以及是否需要浮动来产生多列效果。

浮动设置比较简单,使用:

    float:none|right|left

即可,语义相当明确:无|右|左

但是对于宽度:

    width:auto|percentage|px

其中,对于auto和percentage值为100%这两种情况,很多人以为是相等,其实不然。

如果未指定一个元素的宽度,那么默认的宽度值为`width:auto`。

`auto`表示子元素的宽度等于或者说继承其父元素宽度(width)值。对于最外层的div,其父元素为`body`。

但如果子元素设置了,margin-left,padding-left...等值。

那么,该元素的宽度值(containing=父元素):

    width=containing width - margin-left - border-left - padding-left -  padding-right - border-right -margin-right

在`width:auto`这种情况下,当子元素设置了border,padding等大小,子元素宽度值不再等于父元素,而是根据上述公式计算出来。

但是,当子元素设置`width:100%`时,不论子元素是否设置了border,padding,子元素的宽度始终等于父元素的宽度。

举例来说:

父元素宽度为:10px。

子元素设置为:width:100%.

在子元素没有设置padding,margin的情况下,子元素的宽度为:10px,同时它的盒子模型总宽度也为:10px.

这种情况下,子元素的总宽度等于其父元素总宽度,没有超过其父元素的总宽度,不会出现水平滚动条的现象。

但如果子元素设置为:width:100%,同时padding-left:10px。

在这种情况下,子元素的宽度任然等于其父元素的宽度,但盒子模型的总宽度等于10px+10px,大于父元素的宽度,会出现水平滚动条的现象。

此链接直观的给出了,在width:auto和width:100%两种情况下的区别:[width:auto vs width:100%](http://www.456bereastreet.com/lab/width-auto/)

## 推荐做法

1. 在`box-sizeing:content-box`模型下,谨慎使用width:100%。因为这样会导致,子元素内容超出父元素宽度,出现滚动条或者内容被隐藏的问题。
2. 在`box-sizeing:border-box`模型下,因为将padding,margin,border的宽度都算在了css的width范围内,width:100%不会出现子元素的总宽度大于父元素的问题。

## 参考

1. [http://www.456bereastreet.com/lab/width-auto](http://www.456bereastreet.com/archive/201112/the_difference_between_widthauto_and_width100/)