(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{573:function(a,t,e){"use strict";e.r(t);var r=e(2),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"zookeeper-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-安装"}},[a._v("#")]),a._v(" Zookeeper 安装")]),a._v(" "),e("h2",{attrs:{id:"_1-1zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1zookeeper"}},[a._v("#")]),a._v(" 1.1Zookeeper")]),a._v(" "),e("h3",{attrs:{id:"_1-1-1zookeeper介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1zookeeper介绍"}},[a._v("#")]),a._v(" 1.1.1Zookeeper介绍")]),a._v(" "),e("p",[a._v("ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。\nZooKeeper的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。\nZooKeeper包含一个简单的原语集,提供Java和C的接口。\nZooKeeper代码版本中，提供了分布式独享锁、选举、队列的接口，代码在zookeeper-3.4.3\\src\\recipes。其中分布锁和队列有Java和C两个版本，选举只有Java版本。\n总结:Zookeeper负责服务的协调调度.当客户端发起请求时,返回正确的服务器地址.")]),a._v(" "),e("h3",{attrs:{id:"_1-1-2zookeeper下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2zookeeper下载"}},[a._v("#")]),a._v(" 1.1.2Zookeeper下载")]),a._v(" "),e("p",[a._v("网址: http://zookeeper.apache.org/releases.html.\n如图-2所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-8216270faedd430d85ed24fe29898f31.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-2\n下载路径,点击download.\n如图-3所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-eedd0e510d7943ee829628375061624f.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-3\n下载Zookeeper地址.\nhttp://mirrors.hust.edu.cn/apache/zookeeper/\n如图-4所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-41f07c949eaf4d71b10d3d1df73fa693.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-4")]),a._v(" "),e("h2",{attrs:{id:"_1-2zookeeper安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2zookeeper安装"}},[a._v("#")]),a._v(" 1.2Zookeeper安装")]),a._v(" "),e("h3",{attrs:{id:"_1-2-1安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1安装jdk"}},[a._v("#")]),a._v(" 1.2.1安装JDK")]),a._v(" "),e("p",[a._v("将JDK1.8文件上传到Linux操作系统中/src/usr/local/java/文件下.\n如图-5所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-7074267a86504a7bb7d608e53530c7b6.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-5\n1.解压文件\ntar -xvf jdk-8u51-linux-x64.tar.gz\n2.配置环境变量\n编辑环境变量配置文件\nvim /etc/profile\n如图-6所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-860af512cce74a00983685715f187959.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-6\n使JDK生效,之后检查jdk安装是否成功\nsource /etc/profile\n如图 -7所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-781c797140fe4380881e91619d8fcf5c.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-7")]),a._v(" "),e("h3",{attrs:{id:"_1-2-2上传安装文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2上传安装文件"}},[a._v("#")]),a._v(" 1.2.2上传安装文件")]),a._v(" "),e("p",[a._v("说明:上传zookeeper安装文件.之后解压.\n如图-8所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-7"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-971e330e1d7341ea872052081c42fc9b.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-8\n解压目录:\ntar -xvf zookeeper-3.4.8.tar.gz")]),a._v(" "),e("h3",{attrs:{id:"_1-2-3修改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3修改配置文件"}},[a._v("#")]),a._v(" 1.2.3修改配置文件")]),a._v(" "),e("p",[a._v("在zk根目录下创建文件夹data/log\nmkdir data log\n如图-9所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-8"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-a57e315772904f6fa0e053f88211be4f.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-9\n复制配置文件并且修改名称\ncp zoo_sample.cfg zoo.cfg\n如图-10所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-9"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-9185194983bf4296b3331ee19c6b55a2.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-10")]),a._v(" "),e("h3",{attrs:{id:"_1-2-4启动zk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4启动zk"}},[a._v("#")]),a._v(" 1.2.4启动zk")]),a._v(" "),e("p",[a._v("zk启动关闭命令如下.\nsh zkServer.sh start     或者  ./zkServer.sh start\nsh zkServer.sh stop\nsh zkServer.sh status\n如图-11所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-10"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-47e0942ad88443fab74a7328a65bdbb0.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-11")]),a._v(" "),e("h2",{attrs:{id:"_1-3zookeeper集群安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3zookeeper集群安装"}},[a._v("#")]),a._v(" 1.3Zookeeper集群安装")]),a._v(" "),e("h3",{attrs:{id:"_1-3-1准备文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1准备文件夹"}},[a._v("#")]),a._v(" 1.3.1准备文件夹")]),a._v(" "),e("p",[a._v("在zookeeper根目录中创建新的文件夹zkCluster.\n如图-12所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-11"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-6f229215118a4742b272dcd82284412a.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-12\n如图-13所示")]),a._v(" "),e("h2",{attrs:{id:"创建zk1-zk2-zk3文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建zk1-zk2-zk3文件夹"}},[a._v("#")]),a._v(" 创建zk1/zk2/zk3文件夹.")]),a._v(" "),e("h2",{attrs:{id:"-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-12"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-a231d6cf8f624ea6afe754f027cc4026.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-13\n在每个文件夹里创建data/log文件夹.\nmkdir {zk1,zk2,zk3}/{data,log}\n如图-14所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-13"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-22fca11a61de4db5944f17c7ceca09f7.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-14")]),a._v(" "),e("h3",{attrs:{id:"_1-3-2添加myid文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2添加myid文件"}},[a._v("#")]),a._v(" 1.3.2添加myid文件")]),a._v(" "),e("p",[a._v("分别在zk1/zk2/zk3中的data文件夹中创建新的文件myid.其中的内容依次为1/2/3,与zk节点号对应.\n如图-15所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-14"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-6efe08a4dac84be38670a491f08851a1.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-15\n编辑myid文件,定义编号.\n图-16所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-15"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-cba24531f3b04988ba41302de0e8e8da.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-16")]),a._v(" "),e("h3",{attrs:{id:"_1-3-3编辑配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3编辑配置文件"}},[a._v("#")]),a._v(" 1.3.3编辑配置文件")]),a._v(" "),e("p",[a._v("将zoo_sample.cfg 复制为zoo1.cfg之后修改配置文件.\n如图-17所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-16"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-f060179ff53d4e2a8c73a3304f50aa42.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-17")]),a._v(" "),e("h3",{attrs:{id:"_1-3-4修改zoo1-cfg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4修改zoo1-cfg"}},[a._v("#")]),a._v(" 1.3.4修改zoo1.cfg")]),a._v(" "),e("p",[a._v("如图-18所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-17"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-7ec28ae2215a4f45a49c784263cb5023.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-18\n配置完成后将zoo1.cfg复制2份.之后需要修改对应的文件夹目录.和不同的端口即可.")]),a._v(" "),e("h3",{attrs:{id:"_1-3-5zk集群测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5zk集群测试"}},[a._v("#")]),a._v(" 1.3.5ZK集群测试")]),a._v(" "),e("p",[a._v("通过下面的命令启动zk集群.\nsh zkServer.sh start   zoo1.cfg\nsh zkServer.sh stop    zoo1.cfg\nsh zkServer.sh status  zoo1.cfg\n检查主从关系,从机情况说明.\n如图-19所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-18"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-18"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-de4854b240504612b6dce11f46ed2645.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-19\n检查主从关系,主机情况说明.\n如图-20所示")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-19"}},[a._v("#")]),a._v(" "),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-748f94c832c343c08ac3cdeff31ea15f.png",alt:"image.png"}})]),a._v(" "),e("p",[a._v("图-20")]),a._v(" "),e("h3",{attrs:{id:"_1-3-6关于zookeeper集群说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6关于zookeeper集群说明"}},[a._v("#")]),a._v(" 1.3.6关于zookeeper集群说明")]),a._v(" "),e("p",[a._v("Zookeeper集群中leader负责监控集群状态,follower主要负责客户端链接获取服务列表信息.同时参与投票.")])])}),[],!1,null,null,null);t.default=s.exports}}]);