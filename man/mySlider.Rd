% Auto-generated: do not edit by hand
\name{mySlider}

\alias{mySlider}

\title{MySlider component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
mySlider(id=NULL, picUrl=NULL, step=NULL, value=NULL, range=NULL, width=NULL,
setTimeShow=NULL, typeSite=NULL, height=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{picUrl}{Character. The picUrl displayed in the string.
总预览图路径}

\item{step}{Numeric. 预览图总时间（61.17）}

\item{value}{Character | numeric | named list | unnamed list. The value displayed in the input.
返回开始时间和结束时间 {value:{imgStartTime,imgEndTime}}}

\item{range}{Character | named list. 返回范围数据的范围(图片可视区时间段)}

\item{width}{Character | numeric. 可视区宽度默认10分钟}

\item{setTimeShow}{Logical. 选择开始时间框是否显示}

\item{typeSite}{Logical. 计算模式时间模式，true为底部图片为根据，false为mark块为依据}

\item{height}{Numeric. 图片高度}
}
