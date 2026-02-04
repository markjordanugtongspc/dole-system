<?php require_once '../../config/vite.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me | DOLE - GIP System</title>
    <!-- Vite Assets -->
    <?php vite('backend/js/main.js'); ?>
</head>

<body class="bg-slate-100 font-montserrat">

    <div class="flex h-screen overflow-hidden">
        <!-- Top Navigation Bar -->
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div class="px-3 py-3 lg:px-5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
                            aria-controls="top-bar-sidebar" type="button"
                            class="sm:hidden text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2 cursor-pointer">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div class="flex ms-2 md:me-24 items-center select-none">
                            <img src="../../frontend/images/logo/doleiligan.png" class="h-8 me-3" alt="DOLE Logo" />
                            <div class="flex flex-col">
                                <span
                                    class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">DOLE
                                    LDNPFO</span>
                                <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">About Me
                                    - Developer Profile</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <a href="../../frontend/dashboard/"
                            class="flex items-center text-xs font-bold text-royal-blue hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer border border-royal-blue/20 uppercase hover:scale-105">
                            <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Sidebar -->
        <?php include '../../frontend/components/sidebar/index.php'; ?>

        <!-- Main Content (Centered with Sidebar Offset) -->
        <main class="flex-1 relative overflow-y-auto focus:outline-none scroll-smooth sm:ml-64">

            <!-- Cover Photo / Banner (Solid Professional Color) -->
            <div class="relative h-64 bg-teal-600 overflow-hidden shadow-inner">
                <div class="absolute inset-0 bg-[url('../../assets/img/pattern.svg')] opacity-10 mix-blend-overlay">
                </div>
                <!-- Decorative Elements -->
                <div class="absolute -bottom-10 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div class="absolute top-10 left-10 w-20 h-20 border-4 border-white/5 rounded-full animate-pulse"></div>
            </div>

            <div class="max-w-[1400px] mx-auto px-6 sm:px-12 pb-20">

                <div class="relative -mt-24 sm:-mt-32 mb-8">
                    <!-- Profile Picture (Upper Left) -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                        <div class="relative group">
                            <div
                                class="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white p-1.5 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                <div
                                    class="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                                    <!-- Placeholder for User Image -->
                                    <img src="../images/personal/developer.png" alt="Profile Picture"
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div
                                class="absolute -bottom-3 -right-3 bg-golden-yellow text-royal-blue p-2 rounded-lg shadow-lg border-2 border-white">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>

                        <!-- Name & Basic Info (Beside/Below) -->
                        <div class="mb-4 sm:mb-6 text-left">
                            <h1 class="text-4xl sm:text-5xl font-black text-white leading-none mb-3 drop-shadow-lg">Mark
                                Jordan
                                Ugtong</h1>
                            <span
                                class="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-black uppercase tracking-wider rounded-md mb-2">Student
                                Developer</span>
                            <p class="text-xl font-medium text-gray-500 mt-2">OJT Intern | System Architect</p>
                        </div>
                    </div>
                </div>

                <!-- Main Grid Layout (Wider 4-Column System) -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    <!-- Left Column: Quick Stats / Tech -->
                    <div class="lg:col-span-1 space-y-8">
                        <!-- About Stats -->
                        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <h3
                                class="text-sm font-black text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                                Tech Stack</h3>
                            <div class="grid grid-cols-3 gap-2">
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">Laravel</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">PHP</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">Tailwind</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">Flowbite</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">HTML5</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">JS</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">MySQL</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">Vite</span>
                                <span
                                    class="col-span-1 px-1 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold border border-gray-200 hover:bg-royal-blue hover:text-white transition-colors cursor-default text-center truncate">NodeJS</span>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <h3
                                class="text-sm font-black text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                                Status</h3>
                            <div class="space-y-3">
                                <div class="flex items-center text-sm text-gray-600">
                                    <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span class="font-medium">OJT Internship</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-600">
                                    <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="font-medium">Active Development</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Biography & Details (Wider) -->
                    <div class="lg:col-span-3 space-y-10">

                        <!-- Biography -->
                        <div class="bg-white rounded-2xl p-8 h-full border border-slate-100 shadow-sm">
                            <h2 class="text-2xl font-black text-royal-blue mb-4 flex items-center gap-3">
                                <span class="w-8 h-1 bg-golden-yellow rounded-full"></span>
                                About the Developer
                            </h2>
                            <div class="prose prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                                <p class="mb-4">
                                    I am <strong class="text-gray-900">Mark Jordan Ugtong</strong>, the sole developer
                                    behind the <strong>DOLE-GIP System</strong>. This project was conceptualized and
                                    built during my tenure as an <strong>OJT Intern</strong>, tasked with modernizing
                                    how the department manages Government Internship Program beneficiaries.
                                </p>
                                <p class="mb-4">
                                    As a student, I embraced the challenge of creating a full-stack solution that is not
                                    only functional but also intuitive and visually compliant with modern standards. My
                                    development philosophy focuses on clean code, responsive design (using TailwindCSS),
                                    and secure data handling (PHP/MySQL) to ensure the system serves the public interest
                                    effectively.
                                </p>
                                <div class="bg-blue-50 border-l-4 border-royal-blue p-4 rounded-r-lg mt-6">
                                    <p class="text-sm text-royal-blue font-bold italic">
                                        "Transforming requirements into functional reality through dedication and code."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enquiry Section (Medium Size, Bottom Center) -->
                <section class="relative max-w-4xl mx-auto px-4 py-16 bg-transparent mt-20">
                    <!-- Header Section -->
                    <div class="text-center mb-12">
                        <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Enquire About the <span class="text-teal-600">GIP System</span>
                        </h1>
                        <div class="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Have questions about the system architecture or development process? Fill out the form below
                            and I'll get back to you shortly.
                        </p>
                    </div>

                    <!-- Form Container -->
                    <div
                        class="bg-white rounded-[2.5rem] shadow-xl shadow-slate-300/50 border border-slate-200 overflow-hidden">
                        <div class="md:flex">
                            <!-- Left Side (Modern Blue-Indigo Gradient - Expanded) -->
                            <div
                                class="md:w-[40%] bg-gradient-to-br from-royal-blue via-blue-700 to-indigo-800 p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden rounded-t-[2.5rem] md:rounded-tr-none md:rounded-l-[2.5rem]">
                                <!-- Decorative Circles -->
                                <div
                                    class="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-indigo-500 opacity-20 mix-blend-overlay blur-3xl">
                                </div>

                                <div class="relative z-10">
                                    <h2 class="text-2xl font-black mb-8 tracking-tight">Why <span
                                            class="text-blue-200">Connect?</span></h2>
                                    <ul class="space-y-6">
                                        <li class="flex items-start transition-all duration-300">
                                            <svg class="h-6 w-6 text-blue-300 mr-4 shrink-0" fill="none"
                                                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span class="font-medium text-sm leading-relaxed text-blue-50">Expert
                                                Full-Stack Architecture (PHP/MySQL)</span>
                                        </li>
                                        <li class="flex items-start transition-all duration-300">
                                            <svg class="h-6 w-6 text-blue-300 mr-4 shrink-0" fill="none"
                                                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span class="font-medium text-sm leading-relaxed text-blue-50">Scalable &
                                                Secure Database Design</span>
                                        </li>
                                        <li class="flex items-start transition-all duration-300">
                                            <svg class="h-6 w-6 text-blue-300 mr-4 shrink-0" fill="none"
                                                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span class="font-medium text-sm leading-relaxed text-blue-50">Modern,
                                                Responsive UI/UX Development</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Direct Contact (Pushed further left) -->
                                <div class="mt-12 pt-8 border-t border-white/10 relative -ml-6">
                                    <h3
                                        class="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span class="w-8 h-px bg-blue-300/50"></span> Contact Info
                                    </h3>
                                    <div class="space-y-3">
                                        <a href="mailto:markjordanugtong.202200752@gmail.com"
                                            class="group flex items-center text-white/90 hover:text-white transition-all duration-200 rounded-md px-2 py-1 hover:bg-blue-500/10 hover:scale-[1.02]">

                                            <div
                                                class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>

                                            <span
                                                class="text-xs font-medium group-hover:font-semibold transition-all duration-200">
                                                markjordanugtong.202200752@gmail.com
                                            </span>
                                        </a>
                                    </div>
                                    <div class="flex items-center text-blue-100/70">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span class="text-xs font-medium">Mon - Sat: 8:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Side - Form -->
                            <div
                                class="md:w-[60%] p-10 lg:p-14 bg-white rounded-b-[2.5rem] md:rounded-bl-none md:rounded-r-[2.5rem]">
                                <form class="space-y-6" onsubmit="return handleContactSubmit(event)">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <!-- Full Name -->
                                        <div>
                                            <label
                                                class="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Full
                                                Name</label>
                                            <input type="text" name="name" required placeholder="Mark Jordan Ugtong"
                                                class="w-full px-5 py-4 border border-gray-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all" />
                                        </div>

                                        <!-- Email -->
                                        <div>
                                            <label
                                                class="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Email
                                                Address</label>
                                            <input type="email" name="email" required placeholder="youremal@example.com"
                                                class="w-full px-5 py-4 border border-gray-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all" />
                                        </div>

                                        <!-- Subject -->
                                        <div>
                                            <label
                                                class="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Subject</label>
                                            <input type="text" name="subject" required placeholder="System Inquiry"
                                                class="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all" />
                                        </div>

                                        <!-- Interest Selection -->
                                        <div>
                                            <label
                                                class="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">I
                                                am interested in</label>
                                            <select name="interest" required
                                                class="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all">
                                                <option value="">Select an Option</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="System Demo">System Demo</option>
                                                <option value="Future Collaboration">Future Collaboration</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Message -->
                                    <div>
                                        <label
                                            class="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">Your
                                            Message</label>
                                        <textarea name="message" rows="5" required
                                            placeholder="How can I help you today?"
                                            class="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all resize-none"></textarea>
                                    </div>

                                    <!-- Submit -->
                                    <div class="flex justify-end">
                                        <button type="submit"
                                            class="w-full md:w-auto py-4 px-10 bg-teal-600 text-white font-black rounded-xl shadow-lg hover:bg-teal-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                                            Send Message
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    </div>

    <script>
        function handleContactSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Using the user's previously defined feedback style
            alert(`Thank you ${name}! Your message regarding "${subject}" has been received.\n\nWe'll get back to you at ${email} shortly.`);
            event.target.reset();
            return false;
        }
    </script>
</body>

</html>