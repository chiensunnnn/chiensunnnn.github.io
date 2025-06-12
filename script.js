// 等待DOM内容加载完成后执行函数
document.addEventListener('DOMContentLoaded', function() {
    // 在控制台输出信息，表示脚本已准备就绪
    console.log('我已经准备好了');
    
    // 调用平滑滚动功能的实现函数
    implementSmoothScroll();
    
    // 调用设置联系表单的函数
    setupContactForm();
    
    // 调用设置项目卡片点击事件的函数
    setupProjectCards();
    
    // 调用设置CTA（号召性按钮）点击事件的函数
    setupCTAButton();
});

/**
 * 实现平滑滚动功能
 * 使导航链接点击时页面平滑滚动到对应部分
 */
function implementSmoothScroll() {
    // 获取所有导航链接和页脚链接
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    // 为每个链接添加点击事件监听器
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 获取链接的href属性值，即目标部分的ID
            const targetId = this.getAttribute('href');
            
            // 确保链接是指向页面内部的锚点（以#开头）
            if (targetId.startsWith('#')) {
                // 阻止默认的跳转行为
                e.preventDefault();
                
                // 获取目标元素
                const targetElement = document.querySelector(targetId);
                
                // 如果目标元素存在
                if (targetElement) {
                    // 平滑滚动到目标元素位置，减去80像素的偏移量（考虑固定头部的高度）
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 减去头部高度的偏移
                        behavior: 'smooth' // 使用平滑滚动效果
                    });
                }
            }
        });
    });
}

/**
 * 设置联系表单提交事件
 * 处理表单提交，收集数据并显示确认信息
 */
function setupContactForm() {
    // 获取联系表单元素
    const contactForm = document.querySelector('.contact-form');
    
    // 如果表单存在
    if (contactForm) {
        // 为表单添加提交事件监听器
        contactForm.addEventListener('submit', function(e) {
            // 阻止表单默认提交行为
            e.preventDefault();
            
            // 获取表单中的各个字段值
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 在实际应用中，这里会发送数据到服务器
            // 这里仅做演示，将数据打印到控制台
            console.log('表单提交数据:', { name, email, message });
            
            // 显示提交成功消息
            alert('感谢您的留言！我们会尽快回复您。');
            
            // 重置表单字段
            contactForm.reset();
        });
    }
}

/**
 * 设置项目卡片点击事件
 * 使整个项目卡片可点击，而不仅仅是链接部分
 */
function setupProjectCards() {
    // 获取所有项目卡片元素
    const projectCards = document.querySelectorAll('.project-card');
    
    // 为每个项目卡片添加点击事件监听器
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的不是查看详情链接，则整个卡片可点击
            if (!e.target.classList.contains('project-link')) {
                // 获取卡片内的链接元素
                const link = this.querySelector('.project-link');
                if (link) {
                    // 阻止默认点击行为
                    e.preventDefault();
                    // 在实际应用中，这里会跳转到项目详情页
                    // 这里仅做演示，将链接地址打印到控制台
                    console.log('查看项目详情:', link.getAttribute('href'));
                }
            }
        });
    });
}

/**
 * 设置CTA按钮点击事件
 * 使点击"了解更多"按钮时滚动到关于我们部分
 */
function setupCTAButton() {
    // 获取CTA按钮元素
    const ctaButton = document.querySelector('.cta-button');
    
    // 如果按钮存在
    if (ctaButton) {
        // 为按钮添加点击事件监听器
        ctaButton.addEventListener('click', function() {
            // 获取关于我们部分元素
            const aboutSection = document.getElementById('about');
            
            // 如果关于我们部分存在
            if (aboutSection) {
                // 平滑滚动到关于我们部分，减去80像素的偏移量（考虑固定头部的高度）
                window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: 'smooth' // 使用平滑滚动效果
                });
            }
        });
    }
}

// 添加页面滚动事件，实现导航栏高亮当前部分
window.addEventListener('scroll', function() {
    // 调用高亮当前部分的函数
    highlightCurrentSection();
});

/**
 * 高亮显示当前滚动到的部分对应的导航链接
 * 根据页面滚动位置自动更新导航栏中的活动链接
 */
function highlightCurrentSection() {
    // 获取所有带有id属性的section元素
    const sections = document.querySelectorAll('section[id]');
    
    // 获取当前滚动位置，并添加100像素的偏移量以提前触发高亮
    const scrollPosition = window.scrollY + 100;
    
    // 遍历所有部分
    sections.forEach(section => {
        // 获取部分的顶部位置
        const sectionTop = section.offsetTop;
        // 获取部分的高度
        const sectionHeight = section.offsetHeight;
        // 获取部分的ID
        const sectionId = section.getAttribute('id');
        
        // 检查当前滚动位置是否在该部分内
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // 移除所有导航链接的活动类
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // 为当前部分的导航链接添加活动类
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}