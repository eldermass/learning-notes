import{_ as s,Y as n,Z as a,a0 as e}from"./framework-6d304b95.js";const i={},l=e(`<h1 id="windows中安装open-ssh" tabindex="-1"><a class="header-anchor" href="#windows中安装open-ssh" aria-hidden="true">#</a> windows中安装open-ssh</h1><h2 id="一、安装windows-openssh" tabindex="-1"><a class="header-anchor" href="#一、安装windows-openssh" aria-hidden="true">#</a> 一、安装Windows OpenSSH</h2><ol><li>管理员模式打开 <code>powershell</code> 并输入</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 安装OpenSSH客户端</span>
<span class="token function">Add-WindowsCapability</span> <span class="token operator">-</span>Online <span class="token operator">-</span>Name OpenSSH<span class="token punctuation">.</span>Client~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
 
<span class="token comment">#安装OpenSSH服务端</span>
<span class="token function">Add-WindowsCapability</span> <span class="token operator">-</span>Online <span class="token operator">-</span>Name OpenSSH<span class="token punctuation">.</span>Server~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查看安装情况</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Get-WindowsCapability</span> <span class="token operator">-</span>Online <span class="token punctuation">|</span> ? Name <span class="token operator">-like</span> <span class="token string">&#39;OpenSSH*&#39;</span>

<span class="token comment"># 返回， NotPresent 为未安装</span>
Name  : OpenSSH<span class="token punctuation">.</span>Client~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
State : Installed
 
Name  : OpenSSH<span class="token punctuation">.</span>Server~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
State : NotPresent  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、启动ssh服务器" tabindex="-1"><a class="header-anchor" href="#二、启动ssh服务器" aria-hidden="true">#</a> 二、启动SSH服务器</h2><ol><li>在PowerShell中启动服务</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 启动sshd服务</span>
<span class="token function">Start-Service</span> sshd
 
<span class="token comment"># 将sshd服务设置为自动启动，若不设置需要在每次重启后重新开启sshd</span>
<span class="token function">Set-Service</span> <span class="token operator">-</span>Name sshd <span class="token operator">-</span>StartupType <span class="token string">&#39;Automatic&#39;</span>
 
<span class="token comment"># 确认防火墙规则，一般在安装时会配置好</span>
<span class="token function">Get-NetFirewallRule</span> <span class="token operator">-</span>Name <span class="token operator">*</span>ssh*
 
<span class="token comment"># 若安装时未添加防火墙规则&quot;OpenSSH-Server-In-TCP&quot;，则通过以下命令添加</span>
<span class="token function">New-NetFirewallRule</span> <span class="token operator">-</span>Name sshd <span class="token operator">-</span>DisplayName <span class="token string">&#39;OpenSSH Server (sshd)&#39;</span> <span class="token operator">-</span>Enabled True <span class="token operator">-</span>Direction Inbound <span class="token operator">-</span>Protocol TCP <span class="token operator">-</span>Action Allow <span class="token operator">-</span>LocalPort 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>也可在服务窗口中启动</li></ol><h2 id="三、开启密钥登录" tabindex="-1"><a class="header-anchor" href="#三、开启密钥登录" aria-hidden="true">#</a> 三、开启密钥登录</h2><ol><li>类似linux 在服务器中授权公钥，即在authorized_keys中加入本机的id_rsa.pub内容</li></ol><p>可以使用命令行来完成此操作</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 确保服务器上存在.ssh 文件夹，若不存在则使用下面命令创建</span>
ssh username@ip mkdir C:\\Users\\username\\<span class="token punctuation">.</span>ssh\\
 
<span class="token comment">#通过scp将本地的公钥上传到服务器上并重命名为authorized_keys，注意此方法会覆盖原有authorized_keys</span>
scp C:\\Users\\username\\<span class="token punctuation">.</span>ssh\\id_rsa<span class="token punctuation">.</span>pub user1@ip:C:\\Users\\username\\<span class="token punctuation">.</span>ssh\\authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>windows服务器中需要对authorized_keys文件授权，才能通过ssh免密登录</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># windows远程通过ACL更改文件权限</span>
ssh <span class="token operator">--</span><span class="token operator">%</span> user1@ip icacls<span class="token punctuation">.</span>exe <span class="token string">&quot;C:\\Users\\username\\.ssh\\authorized_keys&quot;</span> <span class="token operator">/</span>inheritance:r <span class="token operator">/</span>grant <span class="token string">&quot;Administrators:F&quot;</span> <span class="token operator">/</span>grant <span class="token string">&quot;SYSTEM:F&quot;</span>

<span class="token comment">#在服务器端修改authorized_keys文件权限</span>
icacls<span class="token punctuation">.</span>exe <span class="token string">&quot;C:\\Users\\username\\.ssh\\authorized_keys&quot;</span> <span class="token operator">/</span>inheritance:r <span class="token operator">/</span>grant <span class="token string">&quot;Administrators:F&quot;</span> <span class="token operator">/</span>grant <span class="token string">&quot;SYSTEM:F&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改默认授权文件位置 在Windows OpenSSH中，默认的授权密钥存放位置为ProgramData\\ssh\\administrators_authorized_keys，此位置对应为管理用户权限。因此需要修改默认授权文件位置。</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#允许公钥授权访问，确保条目不被注释</span>
PubkeyAuthentication yes
 
<span class="token comment">#授权文件存放位置，确保条目不被注释</span>
AuthorizedKeysFile <span class="token punctuation">.</span>ssh/authorized_keys
 
<span class="token comment">#可选，关闭密码登录，提高安全性</span>
PasswordAuthentication no
 
<span class="token comment">#注释掉默认授权文件位置，确保以下条目被注释</span>
<span class="token comment">#Match Group administrators</span>
<span class="token comment">#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#重启sshd，需要管理员权限</span>
<span class="token function">Restart-Service</span> sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、卸载openssh" tabindex="-1"><a class="header-anchor" href="#四、卸载openssh" aria-hidden="true">#</a> 四、卸载openssh</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 卸载 OpenSSH 客户端</span>
<span class="token function">Remove-WindowsCapability</span> <span class="token operator">-</span>Online <span class="token operator">-</span>Name OpenSSH<span class="token punctuation">.</span>Client~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
 
<span class="token comment"># 卸载 OpenSSH 服务端</span>
<span class="token function">Remove-WindowsCapability</span> <span class="token operator">-</span>Online <span class="token operator">-</span>Name OpenSSH<span class="token punctuation">.</span>Server~~~~0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[l];function t(p,r){return n(),a("div",null,o)}const d=s(i,[["render",t],["__file","windows中安装open-ssh.html.vue"]]);export{d as default};
