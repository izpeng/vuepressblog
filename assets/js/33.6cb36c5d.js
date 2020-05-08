(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{568:function(t,a,n){"use strict";n.r(a);var e=n(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-spring-框架核心进阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-框架核心进阶"}},[t._v("#")]),t._v(" 1.SPRING 框架核心进阶")]),t._v(" "),n("h2",{attrs:{id:"_1-1-spring-框架架构分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-spring-框架架构分析"}},[t._v("#")]),t._v(" 1.1.SPRING 框架架构分析")]),t._v(" "),n("h3",{attrs:{id:"_1-1-1-spring-框架应用架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-spring-框架应用架构"}},[t._v("#")]),t._v(" 1.1.1.Spring 框架应用架构")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Spring 官网资源:spring.io/projects\nSpring 是一个”资源整合”框架,通过spring可将很多资源(例如连接池,\nmybatis,...)等整合在一起,对外提供相关服务(例如,秒杀服务,支付服务,...)。")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-d92bfc62abae4b1abbc7a002da599370.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("说明:spring 框架中一切资源的整合都源于IOC模块，IOC要实现对象生命周期的管理，对象依赖关系的管理。")]),t._v(" "),n("h3",{attrs:{id:"_1-1-2-spring-框架产品架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-spring-框架产品架构"}},[t._v("#")]),t._v(" 1.1.2. Spring 框架产品架构")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("产品架构主要从这个框架对外提供的服务（功能）进行理解.")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-9dbc108b167f467ca8b895cd29288f64.png",alt:"image.png"}})]),t._v(" "),n("h3",{attrs:{id:"_1-1-3-spring-框架技术架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-spring-框架技术架构"}},[t._v("#")]),t._v(" 1.1.3.Spring 框架技术架构")]),t._v(" "),n("p",[t._v("IOC API基础架构(Spring 工厂对象分析)")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-96662d4783ed4306993deb401bac9c8b.png",alt:"image.png"}}),t._v("\nIOC(控制反转) 容器初始化过程分析.")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-92dc43a7d1364ae694bd834ebf80e959.png",alt:"image.png"}})]),t._v(" "),n("h2",{attrs:{id:"_1-2-spring框架快速实践-注解方式-脱离文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-spring框架快速实践-注解方式-脱离文档"}},[t._v("#")]),t._v(" 1.2.SPRING框架快速实践 (注解方式-脱离文档)")]),t._v(" "),n("h3",{attrs:{id:"_1-2-1-spring项目创建及配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-spring项目创建及配置"}},[t._v("#")]),t._v(" 1.2.1.Spring项目创建及配置")]),t._v(" "),n("p",[t._v("1.创建maven项目(jar包项目)\n1)项目名称 CGB-SPRING-01\n2)组id:com.cy\n3)打包方式:jar")]),t._v(" "),n("p",[t._v("2.添加项目依赖(spring-context)")]),t._v(" "),n("p",[t._v("添加spring依赖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("   <dependency>\n\t<groupId>org.springframework</groupId>\n\t<artifactId>spring-context</artifactId>\n\t<version>5.1.9.RELEASE</version>\n   </dependency>\n")])])]),n("p",[t._v("添加junit依赖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<dependency>\n  <groupId>junit</groupId>\n  <artifactId>junit</artifactId>\n  <version>4.12</version>\n</dependency>\n")])])]),n("h3",{attrs:{id:"_1-2-2-spring基本测试环境创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-spring基本测试环境创建"}},[t._v("#")]),t._v(" 1.2.2.Spring基本测试环境创建")]),t._v(" "),n("p",[t._v("添加spring配置类(SpringConfig)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('package com.cy.spring.config;\nimport org.springframework.context.annotation.ComponentScan;\n/**\n * @ComponentScan 用于告诉spring容器从\n   * 从指定包进行bean的扫描\n */\n@ComponentScan("com.cy.spring.beans")\npublic class SpringConfig {//spring-configs.xml\n\n}\n')])])]),n("p",[t._v("定义测试基类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("package com.spring;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\npublic class TestBase {\n\t protected AnnotationConfigApplicationContext ctx;\n\t @Before\n\t public void init() {\n\t  ctx=new AnnotationConfigApplicationContext(\n\t\t\t\t SpringConfig.class);\n\t }\n\t @After\n\t public void close() {\n\t\t ctx.close();\n\t }\n\t @Test\n\t public void testCtx() {\n\t\t System.out.println(ctx);\n\t }\n}\n")])])]),n("h3",{attrs:{id:"_1-2-3-spring项目基本业务实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-spring项目基本业务实现"}},[t._v("#")]),t._v(" 1.2.3.Spring项目基本业务实现")]),t._v(" "),n("p",[t._v("业务描述,创建一个DefaultCache对象然后将此对象交给Spring容器管理.\n创建DefaultCache类,并明确此类交给spring管理.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('package com.cy.spring.beans;\nimport javax.annotation.PostConstruct;\nimport javax.annotation.PreDestroy;\nimport org.springframework.context.annotation.Lazy;\nimport org.springframework.context.annotation.Scope;\nimport org.springframework.stereotype.Component;\n/**\n@Component 注解用于告诉spring容器\n请将这个类交给spring管理.\n@Lazy 用于告诉spring容器此对象要延迟加载\n@Scope 用于告诉spring容器此bean的作用域\n1)singleton (单例作用域-默认,会存储到池中)\n2)prototype (多例作用域,每次获取都创建新对象)\n */\n@Lazy\n@Scope("singleton") \n@Component //@Controller,@Service,...\npublic class DefaultCache {\n\t public DefaultCache() {\n\t\t System.out.println("DefaultCache()");\n\t }\n\t @PostConstruct //告诉spring 此对象初始化时执行init方法\n\t public void init() {\n\t\t System.out.println("init()");\n\t }\n\t @PreDestroy//告诉spring 此对象销毁时执行close方法\n\t public void close() {\n\t\t System.out.println("close()");\n\t }\n}\n')])])]),n("p",[t._v("定义测试类,从spring容器中获取bean对象")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('package com.cy.test;\nimport org.junit.Assert;\nimport org.junit.Test;\nimport com.cy.spring.beans.DefaultCache;\npublic class TestCache extends TestBase {\n\t@Test\n\tpublic void testDefaultCahce() {\n\t\tDefaultCache cache01=\n\t\tctx.getBean("defaultCache",DefaultCache.class);\n\t\tAssert.assertNotEquals(null, cache01);\n\t\tDefaultCache cache02=\n\t\tctx.getBean("defaultCache",DefaultCache.class);\n\t\tAssert.assertNotEquals(null, cache02);\n\t\tSystem.out.println(cache01==cache02);\n\t}\n}\n')])])]),n("h3",{attrs:{id:"_1-2-4-spring项目课堂练习分析及实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-spring项目课堂练习分析及实现"}},[t._v("#")]),t._v(" 1.2.4.Spring项目课堂练习分析及实现")]),t._v(" "),n("p",[t._v("1.整合第三方连接池DRUID.\n1)步骤分析:\nstep01:添加依赖(数据库驱动依赖,连接池依赖)\nstep02:对druid连接池进行配置\nstep03:对连接池进行单元测试.\n2)关键代码实现")]),t._v(" "),n("p",[t._v("添加mysql依赖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<dependency>\n\t<groupId>mysql</groupId>\n\t<artifactId>mysql-connector-java</artifactId>\n\t<version>8.0.17</version>\n </dependency>\n")])])]),n("p",[t._v("添加Druid依赖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  <dependency>\n\t<groupId>com.alibaba</groupId>\n\t<artifactId>druid</artifactId>\n\t<version>1.1.19</version>\n  </dependency>\n")])])]),n("p",[t._v("定义数据源配置类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('package com.cy.spring.beans;\nimport javax.sql.DataSource;\n@Configuration\npublic class DataSourceConfig {\n\t  @Bean(value="druid",initMethod="init",destroyMethod="close")\n\t  public DataSource newDruid() {\n\t\t // System.out.println("newDruid()");\n\t\t  DruidDataSource ds=new DruidDataSource();\n\t\t  //ds.setDriverClassName("com.mysql.cj.jdbc.Driver");\n\t\t  ds.setUrl("jdbc:mysql:///test?serverTimezone=GMT");\n\t\t  ds.setUsername("root");\n\t\t  ds.setPassword("root");\n\t\t  ds.setMaxWait(10000);\n\t\t  //....\n\t\t  return ds;\n\t  }\t  \n}\n')])])]),n("p",[t._v("创建单元测试类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('package com.cy.test;\nimport javax.sql.DataSource;\nimport org.junit.Assert;\nimport org.junit.Test;\nimport com.zaxxer.hikari.HikariDataSource;\npublic class TestDataSource extends TestBase{\n\t@Test\n\tpublic void testDruidDataSource()throws Exception {\n\t\tDataSource ds=\n\t\tctx.getBean("druid",DataSource.class);\n\t\tAssert.assertNotEquals(null, ds);\n\t\tSystem.out.println(ds.getConnection());\n\t}\n}\n')])])]),n("h1",{attrs:{id:"_2-整合第三方连接池hikaricp连接池-扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-整合第三方连接池hikaricp连接池-扩展"}},[t._v("#")]),t._v(" 2.整合第三方连接池HiKariCP连接池(扩展).")]),t._v(" "),n("h2",{attrs:{id:"_1-3-spring-ioc-应用原理进阶分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-spring-ioc-应用原理进阶分析"}},[t._v("#")]),t._v(" 1.3.SPRING IOC 应用原理进阶分析")]),t._v(" "),n("h3",{attrs:{id:"_1-3-1-spring-ioc设计思想分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-spring-ioc设计思想分析"}},[t._v("#")]),t._v(" 1.3.1.Spring IOC设计思想分析")]),t._v(" "),n("p",[t._v("IOC 是一种设计思想，称之为控制反转。基于这种思想实现对象创建，对象的科学管理以及应用时的解耦(借助DI机制实现)。Spring框架核心就是基于这种机制进行了完美实现。\n说明：\n1)控制反转探讨的是什么？谁控制谁的问题（spring控制对象的创建管理）\n2)生活中的IOC的实现？(例如股票操盘手,父母包办婚姻）")]),t._v(" "),n("h3",{attrs:{id:"_1-3-2-spring-bean-工厂的初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-spring-bean-工厂的初始化"}},[t._v("#")]),t._v(" 1.3.2.Spring Bean 工厂的初始化")]),t._v(" "),n("p",[t._v("基于xml方式实现Spring中Bean工厂的初始化.")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-630cb3fbad434155b03166a0ec10b184.png",alt:"image.png"}}),t._v("\n说明:Spring 中的Bean工厂会基于Bean对象描述,创建bean的实例,并可以有选择性的对实例对象进行管理(例如单例作用域的对象).")]),t._v(" "),n("h3",{attrs:{id:"_1-3-3-spring-中的两大map对象分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-spring-中的两大map对象分析"}},[t._v("#")]),t._v(" 1.3.3.Spring 中的两大map对象分析")]),t._v(" "),n("p",[t._v("1.如何理解Spring中的两大map对象(存储对象的两个容器)？\n1）一个map用于存储bean的配置信息(工厂的原材料)\n2）一个map用于存储bean的实例信息(工厂中的成品对象)")]),t._v(" "),n("p",[t._v("基于xml配置文件实现:")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-c49b3bb717964a3189411cc5c0387a3f.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("基于注解配置实现:")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-1e18b43a520043d681eea9e4a79a5f7e.png",alt:"image.png"}})]),t._v(" "),n("h3",{attrs:{id:"_1-3-4-spring-中两大bean对象分析-了解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-spring-中两大bean对象分析-了解"}},[t._v("#")]),t._v(" 1.3.4.Spring 中两大bean对象分析(了解)")]),t._v(" "),n("p",[t._v("Bean对象创建\n1)未实现FactoryBean接口(直接构造方法);\n2)实现FactoryBean接口（调用FactoryBean对象的getObject方法）")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-5bdbf2e837434d1eabb4a2ddc7c838e2.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("说明：一般在创建一些相对复杂的工厂对象时，通常会写一个工厂bean对象，\n然后基于工厂bean对象创建具体的工厂对象，例如SqlSessionFactoryBean,\nShiroFilterFactoryBean，ProxyFactoryBean等。")]),t._v(" "),n("h3",{attrs:{id:"_1-3-5-spring-中两大bean对象描述方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-spring-中两大bean对象描述方式"}},[t._v("#")]),t._v(" 1.3.5.Spring 中两大bean对象描述方式")]),t._v(" "),n("p",[t._v("Bean 对象的描述\n1)xml方式 (例如"),n("bean",{staticClass:"”com.beans.Factory”",attrs:{id:"”factory”"}},[t._v(")\n2)annotation方式（@Service,@Controller，@Configuration，@Bean，..）")])],1),t._v(" "),n("p",[t._v("Spring 中用于描述这是一个Bean对象的相关注解如下:")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-ec7bdf52e7324e209438f176a87a0527.png",alt:"image.png"}}),t._v("\n说明:无论使用如上图中的哪个注解对Bean进行描述,对Spring而言都认为是一样的Bean.")]),t._v(" "),n("h2",{attrs:{id:"_1-1-spring-依赖注入实践增强"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-spring-依赖注入实践增强"}},[t._v("#")]),t._v(" 1.1.Spring 依赖注入实践增强")]),t._v(" "),n("h3",{attrs:{id:"_1-1-1-spring-中bean对象依赖注入分析-重点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-spring-中bean对象依赖注入分析-重点"}},[t._v("#")]),t._v(" 1.1.1.Spring 中Bean对象依赖注入分析(重点)")]),t._v(" "),n("p",[t._v("依赖注入(DI)是一种设计思想,简单点就是对象通过set或构造方法直接为对象属性赋值,在Spring框架中为这种注入基于反射技术提供一种自动实现方式.例如:")]),t._v(" "),n("p",[t._v("IOC 依赖注入在项目中的应用实现：")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[t._v("#")]),t._v(" "),n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-8effc442fbba466fbdf7b27016a7bab9.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("实际项目中为了解耦和,对象之间通常会通过接口进行通讯,也就是\n说对象要耦合与接口,例如2")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-aa073ba90cc446a3ab1018da3c585284.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("个人认为：IOC的核心是对象生命周期管理(资源管理)以及\n依赖注入（资源协同）；")]),t._v(" "),n("h3",{attrs:{id:"_1-1-2-spring-中bean对象依赖注入实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-spring-中bean对象依赖注入实践"}},[t._v("#")]),t._v(" 1.1.2.Spring 中Bean对象依赖注入实践")]),t._v(" "),n("p",[t._v("在1.2小节基础上,基于如下设计,进行代码实践分析及实现。")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2019/12/image-31a98667ce2d4cd89c0896f59d297459.png",alt:"image.png"}})]),t._v(" "),n("p",[t._v("核心步骤分析：\nStep01:创建Cache接口以及对应的实现DefaultCache\nStep02:创建SearchService接口以及对应的实现类。\nStep03:将DefaultCache对象注入给DefaultSearchService。\nStep03:创建SynchronizedCache测试@Autowired注解。")]),t._v(" "),n("p",[t._v("关键代码分析及实现：")]),t._v(" "),n("p",[t._v("Cache接口定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("public interface Cache {\n\n}\n")])])]),n("p",[t._v("DefaultCache类定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('@Lazy\n@Component\npublic class DefaultCache implements Cache{\n\tpublic DefaultCache() {\n\t\tSystem.out.println("DefaultCache()");\n\t}\n}\n')])])]),n("p",[t._v("SynchronizedCache定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("@Component\npublic class SynchronizedCache implements Cache {\n\n}\n")])])]),n("p",[t._v("SearchService接口定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("public interface SearchService {\n\n}\n")])])]),n("p",[t._v("SearchService实现类定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('@Service\npublic class DefaultSearchService implements SearchService {\n\t/**@Autowired 可以修饰属性，set方法，构造方法等\n\t * 默认按照属性类型，方法参数类型为对象属性注入值,\n\t * 假如相同类型的对象有多个，还会按属性名或方法参\n\t * 数名等进行查找。\n\t * @Qualifier 配合@Autowired，用于指定要注入的对\n\t * 象的名字。\n\t */\n\t@Autowired\n\t@Qualifier("defaultCache")\n\tprivate Cache cache;\n\t@Override\n\tpublic  String toString() {\n\t\treturn "DefaultSearchService [cache=" + cache + "]";\n\t}\n}\n')])])]),n("p",[t._v("测试实现")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public class TestSearchService extends TestBase {\n\t@Test\n\tpublic void testSearchService() {\n\t\tDefaultSearchService ds=\n\t\tctx.getBean("defaultSearchService",\n\t\t\t\tDefaultSearchService.class);\n\t\tSystem.out.println(ds);\n\t}\n}\n')])])]),n("h1",{attrs:{id:"少年易老学难成，一寸光阴不可轻。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#少年易老学难成，一寸光阴不可轻。"}},[t._v("#")]),t._v(" 少年易老学难成，一寸光阴不可轻。")])])}),[],!1,null,null,null);a.default=r.exports}}]);