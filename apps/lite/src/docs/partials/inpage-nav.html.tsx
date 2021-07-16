import React from 'react';
import {withLayout} from '../helpers/withLayout';

const InpageNav = () => (
	<>
		<h1 id="link">Test: inpage-nav</h1>

		<div className="split-wrapper">
			<div className="split au-body">
				<nav className="au-inpage-nav-links" aria-label="in page navigation">
					<h2 className="au-inpage-nav-links__heading">Contents</h2>
					<ul className="au-link-list">
						<li><a href="#section1">Section 1</a></li>
						<li><a href="#section2">Section 2</a></li>
						<li><a href="#section3">Section 3</a></li>
						<li><a href="#section4">Section 4</a></li>
						<li><a href="#section5">Section 5</a></li>
					</ul>
				</nav>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus
					accusamus doloremque repellat molestias id,
					iusto cum adipisci distinctio tempore <a href="#link">blanditiis</a> dolor hic vero omnis laboriosam!
				</p>

				<p>
					Aenean mattis maximus ante, vitae facilisis nunc commodo vitae. Pellentesque habitant morbi tristique senectus
					et
					netus et malesuada fames ac turpis
					egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea
					dictumst. Sed eleifend eu sem ut laoreet.
					Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac
					lacus.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 1 page headline

					<a id="section1" className="au-inpage-nav-section-link" href="#section1">Link to section</a>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum
					mollitia
					commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit?
					Lorem
					ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae
					odit,
					dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</p>

				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit
					amet
					dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec
					feugiat
					risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 2 page headline

					<a id="section2" className="au-inpage-nav-section-link" href="#section2">Link to section</a>
				</h2>
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto
					perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>

				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla,
					dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis
					blandit,
					magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra
					ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie
					arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi.
					Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>

				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel
					turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo.
					Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 3 page headline with a lot of words so we can test what it looks like when the end of the paragraph is
					hit
					and the headline breaks into another line

					<a id="section3" className="au-inpage-nav-section-link" href="#section3">Link to section</a>
				</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium
					voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet,
					consectetur
					adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus
					quibusdam
					officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex
					debitis
					quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
					aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias
					voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur,
					dolorum
					enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque
					amet
					obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet,
					consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim
					laborum
					voluptate suscipit! Expedita?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis
					recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto
					ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus
					laborum
					itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta
					totam?
					Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore
					asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque,
					magni,
					modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum
					suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id
					voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>,
					necessitatibus
					<a href="#link">autem</a> quam.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 4 page headline

					<a id="section4" className="au-inpage-nav-section-link" href="#section4">Link to section</a>
				</h2>

				<p>
					Das ende&hellip;
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Last stray headline

					<a id="section5" className="au-inpage-nav-section-link" href="#section5">Link to section</a>
				</h2>
			</div>
			<div className="split au-body au-body--dark">
				<nav className="au-inpage-nav-links au-inpage-nav-links--dark" aria-label="in page navigation">
					<h2 className="au-inpage-nav-links__heading">Contents</h2>
					<ul className="au-link-list">
						<li><a href="#sectiondark1">Section 1</a></li>
						<li><a href="#sectiondark2">Section 2</a></li>
						<li><a href="#sectiondark3">Section 3</a></li>
						<li><a href="#sectiondark4">Section 4</a></li>
						<li><a href="#sectiondark5">Section 5</a></li>
					</ul>
				</nav>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus
					accusamus doloremque repellat molestias id,
					iusto cum adipisci distinctio tempore <a href="#link">blanditiis</a> dolor hic vero omnis laboriosam!
				</p>

				<p>
					Aenean mattis maximus ante, vitae facilisis nunc commodo vitae. Pellentesque habitant morbi tristique senectus
					et
					netus et malesuada fames ac turpis
					egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea
					dictumst. Sed eleifend eu sem ut laoreet.
					Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac
					lacus.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 1 page headline

					<a id="sectiondark1" className="au-inpage-nav-section-link" href="#section1">Link to section</a>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum
					mollitia
					commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit?
					Lorem
					ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae
					odit,
					dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</p>

				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit
					amet
					dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec
					feugiat
					risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 2 page headline

					<a id="sectiondark2" className="au-inpage-nav-section-link" href="#section2">Link to section</a>
				</h2>
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto
					perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>

				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla,
					dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis
					blandit,
					magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra
					ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie
					arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi.
					Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>

				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel
					turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo.
					Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 3 page headline with a lot of words so we can test what it looks like when the end of the paragraph is
					hit
					and the headline breaks into another line

					<a id="sectiondark3" className="au-inpage-nav-section-link" href="#section3">Link to section</a>
				</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium
					voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet,
					consectetur
					adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus
					quibusdam
					officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex
					debitis
					quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
					aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias
					voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur,
					dolorum
					enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque
					amet
					obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet,
					consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim
					laborum
					voluptate suscipit! Expedita?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis
					recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto
					ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus
					laborum
					itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta
					totam?
					Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore
					asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque,
					magni,
					modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum
					suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id
					voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>,
					necessitatibus
					<a href="#link">autem</a> quam.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 4 page headline

					<a id="sectiondark4" className="au-inpage-nav-section-link" href="#section4">Link to section</a>
				</h2>

				<p>
					Das ende&hellip;
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Last stray headline

					<a id="sectiondark5" className="au-inpage-nav-section-link" href="#section5">Link to section</a>
				</h2>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--alt">
				<nav className="au-inpage-nav-links" aria-label="in page navigation">
					<h2 className="au-inpage-nav-links__heading">Contents</h2>
					<ul className="au-link-list">
						<li><a href="#sectionalt1">Section 1</a></li>
						<li><a href="#sectionalt2">Section 2</a></li>
						<li><a href="#sectionalt3">Section 3</a></li>
						<li><a href="#sectionalt4">Section 4</a></li>
						<li><a href="#sectionalt5">Section 5</a></li>
					</ul>
				</nav>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus
					accusamus doloremque repellat molestias id,
					iusto cum adipisci distinctio tempore <a href="#link">blanditiis</a> dolor hic vero omnis laboriosam!
				</p>

				<p>
					Aenean mattis maximus ante, vitae facilisis nunc commodo vitae. Pellentesque habitant morbi tristique senectus
					et
					netus et malesuada fames ac turpis
					egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea
					dictumst. Sed eleifend eu sem ut laoreet.
					Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac
					lacus.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 1 page headline

					<a id="sectionalt1" className="au-inpage-nav-section-link" href="#sectionalt1">Link to section</a>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum
					mollitia
					commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit?
					Lorem
					ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae
					odit,
					dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</p>

				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit
					amet
					dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec
					feugiat
					risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 2 page headline

					<a id="sectionalt2" className="au-inpage-nav-section-link" href="#sectionalt2">Link to section</a>
				</h2>
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto
					perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>

				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla,
					dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis
					blandit,
					magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra
					ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie
					arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi.
					Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>

				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel
					turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo.
					Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 3 page headline with a lot of words so we can test what it looks like when the end of the paragraph is
					hit
					and the headline breaks into another line

					<a id="sectionalt3" className="au-inpage-nav-section-link" href="#sectionalt3">Link to section</a>
				</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium
					voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet,
					consectetur
					adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus
					quibusdam
					officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex
					debitis
					quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
					aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias
					voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur,
					dolorum
					enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque
					amet
					obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet,
					consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim
					laborum
					voluptate suscipit! Expedita?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis
					recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto
					ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus
					laborum
					itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta
					totam?
					Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore
					asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque,
					magni,
					modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum
					suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id
					voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>,
					necessitatibus
					<a href="#link">autem</a> quam.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 4 page headline

					<a id="sectionalt4" className="au-inpage-nav-section-link" href="#sectionalt4">Link to section</a>
				</h2>

				<p>
					Das ende&hellip;
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Last stray headline

					<a id="sectionalt5" className="au-inpage-nav-section-link" href="#sectionalt5">Link to section</a>
				</h2>
			</div>
			<div className="split au-body au-body--alt au-body--dark">
				<nav className="au-inpage-nav-links au-inpage-nav-links--dark" aria-label="in page navigation">
					<h2 className="au-inpage-nav-links__heading">Contents</h2>
					<ul className="au-link-list">
						<li><a href="#sectionaltdark1">Section 1</a></li>
						<li><a href="#sectionaltdark2">Section 2</a></li>
						<li><a href="#sectionaltdark3">Section 3</a></li>
						<li><a href="#sectionaltdark4">Section 4</a></li>
						<li><a href="#sectionaltdark5">Section 5</a></li>
					</ul>
				</nav>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus
					accusamus doloremque repellat molestias id,
					iusto cum adipisci distinctio tempore <a href="#link">blanditiis</a> dolor hic vero omnis laboriosam!
				</p>

				<p>
					Aenean mattis maximus ante, vitae facilisis nunc commodo vitae. Pellentesque habitant morbi tristique senectus
					et
					netus et malesuada fames ac turpis
					egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea
					dictumst. Sed eleifend eu sem ut laoreet.
					Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac
					lacus.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 1 page headline

					<a id="sectionaltdark1" className="au-inpage-nav-section-link" href="#section1">Link to section</a>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio fuga adipisci aliquid ut rerum
					mollitia
					commodi eligendi, asperiores nostrum
					unde blanditiis eveniet impedit labore, <a href="#link">temporibus exercitationem</a>, provident ab fugit?
					Lorem
					ipsum dolor sit amet, consectetur
					adipisicing elit. Pariatur est vitae repudiandae sequi illum, odio officiis? Quo nesciunt ipsam recusandae
					odit,
					dolores fuga incidunt repudiandae
					reprehenderit, amet numquam necessitatibus doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</p>

				<p>
					Maecenas eget tincidunt augue. Suspendisse potenti. Proin ornare ultrices molestie. Nunc pretium lacus sit
					amet
					dolor porta, vitae sodales erat
					pellentesque. Nullam a libero mattis, tincidunt ante ac, ultrices mi. Vivamus eget venenatis massa, nec
					feugiat
					risus. Ut eleifend nisi iaculis diam
					faucibus auctor.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 2 page headline

					<a id="sectionaltdark2" className="au-inpage-nav-section-link" href="#section2">Link to section</a>
				</h2>
				<p>
					Voluptate commodi, labore sapiente natus iste facilis eaque harum fuga recusandae dolores laborum iusto
					perspiciatis, numquam dignissimos blanditiis
					alias impedit ipsa. Unde?
				</p>

				<p>
					Phasellus rhoncus tempor nunc, in facilisis leo lobortis sit amet. Duis arcu sem, placerat vel nibh fringilla,
					dictum imperdiet lectus. Nam mauris ante,
					imperdiet id ultricies eget, molestie at lacus. Aliquam erat volutpat. Donec iaculis, massa nec iaculis
					blandit,
					magna lectus tempor nibh, eget fringilla
					nisi felis nec ex. Donec molestie eleifend posuere. Proin <a href="#link">laoreet</a> magna a odio pharetra
					ultrices. Donec sit amet dolor at felis fauci
					orci. Praesent tempor eu magna non ultrices. Vestibulum leo nunc, venenatis et lacinia et, tristique molestie
					arcu. Nullam scelerisque fermentum eros
					rutrum semper. Pellentesque a volutpat dolor. Cras dolor tellus, fermentum nec ipsum ac, facilisis commodo mi.
					Suspendisse potenti. Suspendisse in odio
					posuere, pellentesque lorem nec, tempor mauris. Ut <a href="#link">scelerisque justo</a> a aliquam rutrum.
				</p>

				<p>
					Praesent tincidunt rutrum euismod. Cras hendrerit dui in tortor laoreet condimentum. Sed pellentesque ante vel
					turpis iaculis mattis. Morbi rutrum
					sagittis mi, id rhoncus sem congue quis. Vestibulum dolor libero, congue eget nisl quis, varius dapibus justo.
					Morbi eget justo sit amet risus interdum
					luctus non id tortor. Maecenas feugiat malesuada pretium. Nam sagittis erat feugiat placerat pharetra.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 3 page headline with a lot of words so we can test what it looks like when the end of the paragraph is
					hit
					and the headline breaks into another line

					<a id="sectionaltdark3" className="au-inpage-nav-section-link" href="#section3">Link to section</a>
				</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae blanditiis, enim unde laudantium
					voluptate fuga excepturi explicabo quae, nulla
					dolorum, ea doloribus ducimus. Nesciunt eveniet ab a nobis perferendis! Lorem ipsum dolor sit amet,
					consectetur
					adipisicing elit. Temporibus animi, dolorem
					ut amet magnam ad architecto assumenda enim unde dolores, ratione incidunt, ipsum aspernatur delectus
					quibusdam
					officiis, vero dolor illo?
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Itaque aliquid et iusto ex
					debitis
					quos eum sit quidem ab culpa tempora
					voluptatibus sequi quam sunt unde, fuga cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
					aliquam beatae unde corporis autem quos
					dignissimos delectus ullam odit, dolore natus, eos, nam eligendi reprehenderit <a href="#link">qui</a> alias
					voluptatibus. Minima, ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi itaque voluptatibus. Maxime tenetur,
					dolorum
					enim, adipisci, ullam, quibusdam nemo
					debitis nihil magni itaque voluptatem. Ullam <a href="#link">minus</a> officia nulla mollitia.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis earum eveniet beatae ipsa itaque
					amet
					obcaecati in dolorum sapiente atque
					magnam sit accusantium nemo commodi aut debitis, ea quod. Lorem ipsum <a href="#link">dolor sit</a> amet,
					consectetur adipisicing elit. Veniam magni minus
					soluta neque cumque inventore similique veritatis. Nostrum obcaecati eveniet assumenda ea cupiditate enim
					laborum
					voluptate suscipit! Expedita?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, accusantium soluta explicabo debitis
					recusandae, illum beatae ullam pariatur aliquam,
					iusto vero quia! Totam consequatur rerum tenetur, placeat ex beatae. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Laudantium, magni accusamus
					molestiae eveniet expedita aliquam distinctio cum voluptatem quidem voluptatum, ut possimus autem, architecto
					ratione, officia labore placeat excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#link">elit</a>. Doloremque necessitatibus
					laborum
					itaque, suscipit, expedita est possimus!
					Veritatis mollitia eligendi harum consequuntur fugit, explicabo, facilis corporis ex dolore, ipsam soluta
					totam?
					Lorem ipsum dolor sit amet, consectetur
					Beatae, deserunt facilis nobis! <a href="#link">Illum</a> aspernatur commodi perspiciatis cum esse, labore
					asperiores natus in mollitia totam inventore. Ab
					ducimus numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vel itaque, neque,
					magni,
					modi eum blanditiis facere, natus
					accusamus expedita autem? <a href="#link">Eveniet</a> ad, consequatur <a href="#link">architecto</a> illum
					suscipit culpa <a href="#link">iure</a>. Sed!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat <a href="#link">ipsa</a> recusandae eos id
					voluptatibus ut molestias earum placeat odit
					ex, delectus quas doloribus iusto <a href="#link">odio</a> dolorum, <a href="#link">similique</a>,
					necessitatibus
					<a href="#link">autem</a> quam.
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Section 4 page headline

					<a id="sectionaltdark4" className="au-inpage-nav-section-link" href="#section4">Link to section</a>
				</h2>

				<p>
					Das ende&hellip;
				</p>

				<h2 className="au-inpage-nav-section au-display-sm">
					Last stray headline

					<a id="sectionaltdark5" className="au-inpage-nav-section-link" href="#section5">Link to section</a>
				</h2>
			</div>
		</div>
	</>
);

export default withLayout(InpageNav);
