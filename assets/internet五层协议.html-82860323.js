import{_ as a,Y as e,Z as i,a0 as o}from"./framework-6d304b95.js";const t={},l=o('<h1 id="internet-五层协议栈" tabindex="-1"><a class="header-anchor" href="#internet-五层协议栈" aria-hidden="true">#</a> internet 五层协议栈</h1><h2 id="一、五层协议概述" tabindex="-1"><a class="header-anchor" href="#一、五层协议概述" aria-hidden="true">#</a> 一、五层协议概述</h2><ol><li>互联网的传输有很多相关的协议，该模型将其按功能分成了五层。分别是<code>应用层</code>（Application Layer）、<code>传输层</code>（Transport Layer）、 <code>网络层</code>（Network Layer）、<code>链接层</code>（Link Layer）、<code>实体层</code>（Physical Layer）。越下面的层，越靠近硬件；越上面的层，越靠近用户</li></ol><h2 id="二、实体层" tabindex="-1"><a class="header-anchor" href="#二、实体层" aria-hidden="true">#</a> 二、实体层</h2><ol><li>这一层的功能，主要是通过物理手段，将电脑连接起来，根据某些物质特性或某种原理，让 0 和 1 的数据能够借助实体在电脑间传输。</li></ol><h2 id="三、连接层" tabindex="-1"><a class="header-anchor" href="#三、连接层" aria-hidden="true">#</a> 三、连接层</h2><h3 id="_3-1-连接层的功能" tabindex="-1"><a class="header-anchor" href="#_3-1-连接层的功能" aria-hidden="true">#</a> 3.1 连接层的功能</h3><ol><li>单纯的 0 和 1 在电脑间传输是没有意义的，链接层的作用就是按照某种规定将 0 和 1 分组，让他变得有意义起来。</li></ol><h3 id="_3-2-以太网协议" tabindex="-1"><a class="header-anchor" href="#_3-2-以太网协议" aria-hidden="true">#</a> 3.2 以太网协议</h3><ol><li><p>以太网规定，一组电信号构成一个数据包，叫做<code>帧</code>（Frame）。每一帧分成两个部分：标头（Head）和数据（Data）。</p></li><li><p>&quot;标头&quot;包含数据包的一些说明项，比如发送者、接受者、数据类型等等；&quot;数据&quot;则是数据包的具体内容。</p></li><li><p>&quot;标头&quot;的长度，固定为 18 字节。&quot;数据&quot;的长度，最短为 46 字节，最长为 1500 字节。因此，整个&quot;帧&quot;最短为 64 字节，最长为 1518 字节。如果数据很长，就必须分割成多个帧进行发送。</p></li></ol><h3 id="_3-3-mac-地址" tabindex="-1"><a class="header-anchor" href="#_3-3-mac-地址" aria-hidden="true">#</a> 3.3 MAC 地址</h3><ol><li><p>以太网规定，连入网络的所有设备，都必须具有&quot;网卡&quot;接口。数据包必须是从一块网卡，传送到另一块网卡。网卡的地址，就是数据包的发送地址和接收地址，这叫做 MAC 地址,也被称作物理地址。</p></li><li><p>每块网卡出厂的时候，都有一个全世界独一无二的 MAC 地址，长度是 48 个二进制位，通常用 12 个十六进制数表示。前 6 个十六进制数是厂商编号，后 6 个是该厂商的网卡流水号。有了 MAC 地址，就可以定位网卡和数据包的路径了。 例：00-BF-CC-FF-F1-06</p></li></ol><h3 id="_3-4-广播-传输方式" tabindex="-1"><a class="header-anchor" href="#_3-4-广播-传输方式" aria-hidden="true">#</a> 3.4 广播（传输方式）</h3><ol><li><p>一块网卡怎么会知道另一块网卡的 MAC 地址，并把数据包准确送到接收方呢？以太网采用了一种很&quot;原始&quot;的方式，它不是把数据包准确送到接收方，而是向本网络内所有计算机发送，让每台计算机自己判断，是否为接收方。</p></li><li><p>例：发送者向本网络发送一个数据包，本网络的所有计算机都会收到该数据包，收到数据包的计算机会读取这个包的&quot;标头&quot;，找到接收方的 MAC 地址，然后与自身的 MAC 地址相比较，如果两者相同，就接受这个包，做进一步处理，否则就丢弃这个包。</p></li></ol><h2 id="四、网络层" tabindex="-1"><a class="header-anchor" href="#四、网络层" aria-hidden="true">#</a> 四、网络层</h2><h3 id="_4-1-由来" tabindex="-1"><a class="header-anchor" href="#_4-1-由来" aria-hidden="true">#</a> 4.1 由来</h3><ol><li><p>互联网是无数子网络共同组成的一个巨型网络，很难想象上海和洛杉矶的电脑会在同一个网络中（实体原因）。以太网采用广播方式发送数据包，所有成员人手一&quot;包&quot;，效率低下，是十分不合理的（理论问题）。因此就有了<code>自网络</code>和<code>路由</code></p></li><li><p>为了区分不同的子网络，和数据包送往的目标子网络，就得有个规范。</p></li></ol><h3 id="_4-2-ip-协议" tabindex="-1"><a class="header-anchor" href="#_4-2-ip-协议" aria-hidden="true">#</a> 4.2 IP 协议</h3><ol><li><p>规定网络地址的协议就叫做 IP 协议。目前，广泛采用的是 IP 协议第四版，简称 IPv4。这个版本规定，网络地址由 32 个二进制位组成。</p></li><li><p>&quot;子网掩码&quot;（subnet mask）。就是表示子网络特征的一个参数。它在形式上等同于 IP 地址，也是一个 32 位二进制数字，它的网络部分全部为 1，主机部分全部为 0。比如，IP 地址 172.16.254.1，如果已知网络部分是前 24 位，主机部分是后 8 位，那么子网络掩码就是 11111111.11111111.11111111.00000000，写成十进制就是 255.255.255.0</p></li><li><p>将两个 IP 地址与子网掩码分别进行 AND 运算（两个数位都为 1，运算结果为 1，否则为 0），若结果相同，，就表明它们在同一个子网络中，否则就不是。</p></li><li><p>互联网上的每一台计算机，都会分配到一个 IP 地址。根据子网掩码可计算出<code>网络</code>和<code>主机</code>部分。比如，IP 地址 172.16.254.1，这是一个 32 位的地址，假定它子网掩码是 255.255.255.0，那网络部分就是前 24 位（172.16.254），那么主机部分就是后 8 位（最后的那个 1）。处于同一个子网络的电脑，它们 IP 地址的网络部分必定是相同的，也就是说 172.16.254.2 应该与 172.16.254.1 处在同一个子网络。</p></li></ol><h3 id="_4-3-ip-数据包" tabindex="-1"><a class="header-anchor" href="#_4-3-ip-数据包" aria-hidden="true">#</a> 4.3 IP 数据包</h3><ol><li>根据 IP 协议发送的数据，就叫做 IP 数据包，其中包括了 ip 的地址信息。我们可以把 IP 数据包直接放进以太网数据包的&quot;数据&quot;部分，因此完全不用修改以太网的规格。这就是互联网分层结构的好处：上层的变动完全不涉及下层的结构。</li></ol><blockquote><p>ip 数据包结构： MAC 头 + （IP 头 + 数据）</p></blockquote><h3 id="_4-4-arp-协议" tabindex="-1"><a class="header-anchor" href="#_4-4-arp-协议" aria-hidden="true">#</a> 4.4 ARP 协议</h3><ol><li><p>因为 IP 数据包是放在以太网数据包里发送的，所以我们必须同时知道两个地址，一个是对方的 MAC 地址，另一个是对方的 IP 地址。通常情况下，对方的 IP 地址是已知的，但是我们不知道它的 MAC 地址。</p><p>所以，我们需要一种机制，能够从 IP 地址得到 MAC 地址。</p></li><li><p>这里又可以分成两种情况。第一种情况，如果两台主机不在同一个子网络，那么事实上没有办法得到对方的 MAC 地址，只能把数据包传送到两个子网络连接处的&quot;网关&quot;（gateway），让网关去处理。</p><p>第二种情况，如果两台主机在同一个子网络，那么我们可以用 ARP 协议，得到对方的 MAC 地址。ARP 协议也是发出一个数据包（包含在以太网数据包中），其中包含它所要查询主机的 IP 地址，在对方的 MAC 地址这一栏，填的是 FF:FF:FF:FF:FF:FF，表示这是一个&quot;广播&quot;地址。它所在子网络的每一台主机，都会收到这个数据包，从中取出 IP 地址，与自身的 IP 地址进行比较。如果两者相同，都做出回复，向对方报告自己的 MAC 地址，否则就丢弃这个包。</p></li></ol><h2 id="五、传输层" tabindex="-1"><a class="header-anchor" href="#五、传输层" aria-hidden="true">#</a> 五、传输层</h2><h3 id="_5-1-由来" tabindex="-1"><a class="header-anchor" href="#_5-1-由来" aria-hidden="true">#</a> 5.1 由来</h3><ol><li><p>此时我们还需要一个参数，表示这个数据包到底供哪个程序（进程）使用。这个参数就叫做&quot;端口&quot;（port），它其实是每一个使用网卡的程序的编号。每个数据包都发到主机的特定端口，所以不同的程序就能取到自己所需要的数据。</p></li><li><p>&quot;端口&quot;是 0 到 65535 之间的一个整数，正好 16 个二进制位。0 到 1023 的端口被系统占用，用户只能选用大于 1023 的端口。不管是浏览网页还是在线聊天，应用程序会随机选用一个端口，然后与服务器的相应端口联系。</p></li><li><p>&quot;传输层&quot;的功能，就是建立&quot;端口到端口&quot;的通信。相比之下，&quot;网络层&quot;的功能是建立&quot;主机到主机&quot;的通信。只要确定主机和端口，我们就能实现程序之间的交流。因此，Unix 系统就把主机+端口，叫做&quot;套接字&quot;（socket）。有了它，就可以进行网络应用程序开发了。</p></li></ol><h3 id="_5-2-udp-协议" tabindex="-1"><a class="header-anchor" href="#_5-2-udp-协议" aria-hidden="true">#</a> 5.2 UDP 协议</h3><ol><li>现在，我们必须在数据包中加入端口信息，这就需要新的协议。最简单的实现叫做 UDP 协议，它的格式几乎就是在数据前面，加上端口号。UDP 数据包非常简单，&quot;标头&quot;部分一共只有 8 个字节，总长度不超过 65,535 字节，正好放进一个 IP 数据包。</li></ol><h3 id="_6-3-tcp-协议" tabindex="-1"><a class="header-anchor" href="#_6-3-tcp-协议" aria-hidden="true">#</a> 6.3 TCP 协议</h3><ol><li><p>UDP 协议的优点是比较简单，容易实现，但是缺点是可靠性较差，一旦数据包发出，无法知道对方是否收到。</p></li><li><p>为了解决这个问题，提高网络可靠性，TCP 协议就诞生了。这个协议非常复杂，但可以近似认为，它就是有确认机制的 UDP 协议，每发出一个数据包都要求确认。如果有一个数据包遗失，就收不到确认，发出方就知道有必要重发这个数据包了。</p></li><li><p>因此，TCP 协议能够确保数据不会遗失。它的缺点是过程复杂、实现困难、消耗较多的资源。</p></li><li><p>TCP 数据包和 UDP 数据包一样，都是内嵌在 IP 数据包的&quot;数据&quot;部分。TCP 数据包没有长度限制，理论上可以无限长，但是为了保证网络的效率，通常 TCP 数据包的长度不会超过 IP 数据包的长度，以确保单个 TCP 数据包不必再分割。</p></li></ol><h2 id="六、应用层" tabindex="-1"><a class="header-anchor" href="#六、应用层" aria-hidden="true">#</a> 六、应用层</h2><ol><li><p>&quot;应用层&quot;的作用，就是规定应用程序的数据格式。</p></li><li><p>举例来说，TCP 协议可以为各种各样的程序传递数据，比如 Email、WWW、FTP 等等。那么，必须有不同协议规定电子邮件、网页、FTP 数据的格式，这些应用程序协议就构成了&quot;应用层&quot;。</p></li><li><p>这是最高的一层，直接面对用户。它的数据就放在 TCP 数据包的&quot;数据&quot;部分。因此，现在的以太网的数据包就变成下面这样。</p></li></ol><blockquote><p>ip 数据包结构： MAC 头 + （IP 头 + （UDP/TCP 头 + 数据））</p></blockquote>',34),d=[l];function r(h,c){return e(),i("div",null,d)}const u=a(t,[["render",r],["__file","internet五层协议.html.vue"]]);export{u as default};
